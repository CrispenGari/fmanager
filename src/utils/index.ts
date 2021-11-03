import { writeFile, mkdir, rmdir, rm } from "fs/promises";
import path from "path";
import chalk from "chalk";

// creating a file
export const createFile = async (
  filename: string,
  cwd: string
): Promise<void> => {
  await writeFile(path.resolve(path.join(cwd, filename)), "");
  console.log(chalk.green(`created file: `), chalk.blue(`${filename}`));
};

// creating a folder
export const createFolder = async (
  foldername: string,
  cwd: string
): Promise<void> => {
  await mkdir(path.resolve(path.join(cwd, foldername)));
  console.log(chalk.green(`created folder: `), chalk.blue(`${foldername}`));
};

// deleting a folder
export const deleteFolder = async (
  foldername: string,
  cwd: string
): Promise<void> => {
  await rmdir(path.resolve(path.join(cwd, foldername)));
  console.log(chalk.green(`deleted folder: `), chalk.red(`${foldername}`));
};

// deleting a file
export const deleteFile = async (
  filename: string,
  cwd: string
): Promise<void> => {
  await rm(path.resolve(path.join(cwd, filename)));
  console.log(chalk.green(`deleted file: `), chalk.red(`${filename}`));
};

// available commands

export const commands: string[] = [
  "touch-file",
  "touch-folder",
  "rm-file",
  "rename-file",
  "rm-folder",
  "rename-folder",
].map((e) => e.toLocaleLowerCase());

export const commandsObject = {
  touchFile: "touch-file",
  touchFolder: "touch-folder",
  removeFile: "rm-file",
  renameFile: "rename-file",
  removeFolder: "rm-folder",
  renameFolder: "rename-folder",
};
