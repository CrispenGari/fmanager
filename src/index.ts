#!/usr/bin/env ts-node
import process from "process";
import {
  createFile,
  commands,
  commandsObject,
  deleteFolder,
  deleteFile,
  createFolder,
  renameFolder,
  renameFile,
  listFilesAndFolders,
  openFile,
  moveFileFolder,
  copyFiles,
} from "./utils";

const cwd = process.cwd();
const args: string[] = process.argv.slice(2);
(async () => {
  let cmd: string = "";
  let name: string = "";
  let name2: string = "";
  if (args.length === 2) {
    cmd = args[0];
    name = args[1];
  } else if (args.length === 3) {
    cmd = args[0];
    (name = args[1]), (name2 = args[2]);
  } else if (args.length === 1) {
    [cmd] = args;
  }
  if (commands.indexOf(cmd.trim().toLocaleLowerCase()) === -1) return;
  const command: string = cmd.trim().toLocaleLowerCase();
  switch (command) {
    case commandsObject.removeFile:
      await deleteFile(name.trim(), cwd);
      break;
    case commandsObject.removeFolder:
      await deleteFolder(name.trim(), cwd);
      break;
    case commandsObject.touchFile:
      await createFile(name.trim(), cwd);
      break;
    case commandsObject.touchFolder:
      await createFolder(name.trim(), cwd);
      break;
    case commandsObject.renameFile:
      await renameFile(name.trim(), name2.trim(), cwd);
      break;
    case commandsObject.renameFolder:
      await renameFolder(name.trim(), name2.trim(), cwd);
      break;
    case commandsObject.openFile:
      await openFile(name.trim(), cwd);
      break;
    case commandsObject.listFoldersFile:
    case commandsObject.listFilesFolders:
      await listFilesAndFolders(cwd);
      break;
    case commandsObject.moveFileFolder:
      await moveFileFolder(name.trim(), name2.trim(), cwd);
      break;
    case commandsObject.copyFil:
      await copyFiles(name.trim(), name2.trim(), cwd);
      break;
    default:
      break;
  }
})().catch(() => {});
