#!/usr/bin/env ts-node
import process from "process";
import {
  createFile,
  commands,
  commandsObject,
  deleteFolder,
  deleteFile,
  createFolder,
} from "./utils";
const cwd = process.cwd();
const args: string[] = process.argv.slice(2);
(async () => {
  const [cmd, name] = args;
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
    default:
      break;
  }
})().catch(() => {});
