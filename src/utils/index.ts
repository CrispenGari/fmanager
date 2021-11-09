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

// available commands
export const commands: string[] = [
  "touch-file",
  "touch-folder",
  "rm-file",
  "rename-file",
  "rm-folder",
  "rename-folder",
  "ls",
  "dir",
  "open",
  "move",
  "copy-file",
].map((e) => e.toLocaleLowerCase());

export const commandsObject = {
  touchFile: "touch-file",
  touchFolder: "touch-folder",
  removeFile: "rm-file",
  renameFile: "rename-file",
  removeFolder: "rm-folder",
  renameFolder: "rename-folder",
  listFoldersFile: "ls",
  listFilesFolders: "dir",
  openFile: "open",
  moveFileFolder: "move",
  copyFil: "copy-file",
};
