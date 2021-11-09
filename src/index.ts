#!/usr/bin/env ts-node
import process from "process";
import {
  createFile,
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
  displayVersion,
  commandNotFound,
  displayHelp,
} from "./utils";

import pkg from "../package.json";

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
  const command: string = cmd.trim().toLocaleLowerCase();

  if (commandsObject.removeFile.indexOf(command) !== -1) {
    await deleteFile(name.trim(), cwd);
  } else if (commandsObject.removeFolder.indexOf(command) !== -1) {
    await deleteFolder(name.trim(), cwd);
  } else if (commandsObject.touchFolder.indexOf(command) !== -1) {
    await createFolder(name.trim(), cwd);
  } else if (commandsObject.touchFile.indexOf(command) !== -1) {
    await createFile(name.trim(), cwd);
  } else if (commandsObject.renameFile.indexOf(command) !== -1) {
    await renameFile(name.trim(), name2.trim(), cwd);
  } else if (commandsObject.renameFolder.indexOf(command) !== -1) {
    await renameFolder(name.trim(), name2.trim(), cwd);
  } else if (commandsObject.openFile.indexOf(command) !== -1) {
    await openFile(name.trim(), cwd);
  } else if (commandsObject.listFoldersFile.indexOf(command) !== -1) {
    await listFilesAndFolders(cwd);
  } else if (commandsObject.moveFileFolder.indexOf(command) !== -1) {
    await moveFileFolder(name.trim(), name2.trim(), cwd);
  } else if (commandsObject.copyFil.indexOf(command) !== -1) {
    await copyFiles(name.trim(), name2.trim(), cwd);
  } else if (commandsObject.version.indexOf(command) !== -1) {
    await displayVersion(pkg);
  } else if (commandsObject.help.indexOf(command) !== -1) {
    await displayHelp();
  } else {
    await commandNotFound(command);
  }
})().catch(() => {});
