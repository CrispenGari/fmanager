import {
  writeFile,
  mkdir,
  rmdir,
  rm,
  rename,
  readdir,
  lstat,
} from "fs/promises";
import { copySync } from "fs-extra";
import open from "open";
import { move } from "@crispengari/fsmove";
("open");
import path from "path";
import chalk from "chalk";
import { isAbsolute } from "path";
// creating a file
export const createFile = async (
  filename: string,
  cwd: string
): Promise<void> => {
  console.log();
  await writeFile(path.resolve(path.join(cwd, filename)), "", {
    encoding: "utf-8",
  });
  console.log(chalk.green(`created file: `), chalk.blue(`${filename}`));
};

// creating a folder
export const createFolder = async (
  foldername: string,
  cwd: string
): Promise<void> => {
  console.log();
  await mkdir(path.resolve(path.join(cwd, foldername)), {
    recursive: true,
  });
  console.log(chalk.green(`created folder: `), chalk.blue(`${foldername}`));
};

// deleting a folder
export const deleteFolder = async (
  foldername: string,
  cwd: string
): Promise<void> => {
  console.log();
  await rmdir(path.resolve(path.join(cwd, foldername)));
  console.log(chalk.green(`deleted folder: `), chalk.red(`${foldername}`));
};

// deleting a file
export const deleteFile = async (
  filename: string,
  cwd: string
): Promise<void> => {
  console.log();
  await rm(path.resolve(path.join(cwd, filename)));
  console.log(chalk.green(`deleted file: `), chalk.red(`${filename}`));
};

// renaming a file

export const renameFolder = async (
  foldername: string,
  newFolderName: string,
  cwd: string
): Promise<void> => {
  console.log();
  await rename(
    path.resolve(path.join(cwd, foldername)),
    path.resolve(path.join(cwd, newFolderName))
  );
  await console.log(
    chalk.green(`renamed folder from: `),
    chalk.cyan(`${foldername}`),
    chalk.green("to:"),
    chalk.cyan(`${newFolderName}`)
  );
};

// Renaming files

export const renameFile = async (
  filename: string,
  newFileName: string,
  cwd: string
): Promise<void> => {
  console.log();
  await rename(
    path.resolve(path.join(cwd, filename)),
    path.resolve(path.join(cwd, newFileName))
  );
  console.log(
    chalk.green(`renamed file from: `),
    chalk.cyan(`${filename}`),
    chalk.green("to:"),
    chalk.cyan(`${newFileName}`)
  );
};

// listing files
export const listFilesAndFolders = async (cwd: string): Promise<void> => {
  console.log();
  const _result = await readdir(cwd);
  _result.forEach(async (res, _) => {
    const stats = await lstat(path.resolve(path.join(cwd, res)));
    const isDirectory: boolean = stats.isDirectory();
    console.log(
      ` - ${res}`,
      isDirectory === false ? chalk.blue(`(file)`) : chalk.red(`(folder)`)
    );
  });
};

// opening a file
export const openFile = async (
  filename: string,
  cwd: string
): Promise<void> => {
  console.log();
  await open(path.resolve(path.join(cwd, filename)));
};

// moving files or folders
export const moveFileFolder = async (
  src: string,
  dest: string,
  cwd: string
): Promise<void> => {
  console.log();
  const srcPath: string = isAbsolute(src)
    ? String(src).replace("\\", "/")
    : path.resolve(path.join(cwd, src));
  const basename: string = path.basename(srcPath);
  const destPath: string = isAbsolute(dest)
    ? String(dest).replace("\\", "/").replace(basename, "")
    : path.resolve(path.join(cwd, dest)).replace(basename, "");
  const stats = await lstat(srcPath);
  const isDirectory: boolean = stats.isDirectory();
  if (await move(srcPath, path.resolve(path.join(destPath, basename)))) {
    console.log(
      chalk.green(`moved:`),
      isDirectory ? chalk.red(`${"folder"}`) : chalk.yellow(`${"file"}`),
      chalk.blue(src),
      chalk.green(`to:`),
      chalk.green(dest)
    );
  }
  return;
};

// copying a file

export const copyFiles = async (
  src: string,
  dest: string,
  cwd: string
): Promise<void> => {
  console.log();
  const srcPath: string = isAbsolute(src)
    ? String(src).replace("\\", "/")
    : path.resolve(path.join(cwd, src));
  const basename: string = path.basename(srcPath);
  const destPath: string = isAbsolute(dest)
    ? String(dest).replace("\\", "/").replace(basename, "")
    : path.resolve(path.join(cwd, dest)).replace(basename, "");

  await copySync(srcPath, path.resolve(path.join(destPath, basename)));
  console.log(
    chalk.green(`copied:`),
    chalk.yellow(`${"file"}`),
    chalk.blue(src),
    chalk.green(`to:`),
    chalk.blue(dest)
  );
};

// version

export const displayVersion = async (pkg: any): Promise<void> => {
  console.log();
  console.log(chalk.green("fmanager: "), chalk.cyan(`v${pkg.version}`));
};

// command not found

export const commandNotFound = async (command: string): Promise<void> => {
  console.log();
  console.log(chalk.red("unknown command:"), chalk.yellow(command));
  console.log(
    chalk.blue("try:"),
    chalk.yellow("fmanager -h"),
    chalk.blue("or"),
    chalk.yellow("fmanager --help"),
    chalk.blue("for"),
    chalk.green("help")
  );
};

interface Command {
  names: string[];
  description: string;
}

const commands: Command[] = [
  {
    names: ["touch-file"],
    description: "creating a file in a current directory.",
  },
  {
    names: ["touch-folder"],
    description: "creating a folder in a current directory.",
  },
  {
    names: ["rm-file"],
    description: "removes a file in the current directory.",
  },
  {
    names: ["rm-folder"],
    description: "removes a folder in the current directory.",
  },
  { names: ["rename-folder"], description: "renames a folder to a new name." },
  { names: ["rename-file"], description: "renames a file to a new name." },
  {
    names: ["ls", "dir"],
    description: "list files and folders in the current directory.",
  },
  {
    names: ["open"],
    description: "open the file, folder with the default program.",
  },
  { names: ["copy-file"], description: "copies file to a new path." },
  { names: ["-v", "--version"], description: "displays the fmanager version." },
  { names: ["-h", "--help"], description: "displays the help commands." },
];
export const commandsObject = {
  touchFile: ["touch-file"],
  touchFolder: ["touch-folder"],
  removeFile: ["rm-file"],
  renameFile: ["rename-file"],
  removeFolder: ["rm-folder"],
  renameFolder: ["rename-folder"],
  listFoldersFile: ["ls", "dir"],
  openFile: ["open"],
  moveFileFolder: ["move"],
  copyFil: ["copy-file"],
  version: ["-v", "--version"],
  help: ["-h", "--help"],
};

// help commands

export const displayHelp = async (): Promise<void> => {
  console.log();
  console.log(chalk.green("------- HELP "));
  console.log();
  await commands.forEach((command: Command) => {
    console.log(
      chalk.cyan(" command(s)  >"),
      command.names.join(chalk.blue(" or "))
    );
    console.log(
      chalk.greenBright(" description >"),
      chalk.yellow(command.description)
    );
    console.log();
  });
};
