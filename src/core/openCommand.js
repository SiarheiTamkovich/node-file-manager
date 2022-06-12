import childProcess from 'child_process';
import { osCommand } from "../commands/os.js";
import { __dirname } from "./params.js";
import path from 'path';

export const openCommand = (command) => {

  switch (command[0]){
    case '.exit':
      process.exit();
    break
    case 'cd':
//      const child = childProcess.fork(path.join(__dirname, '../commands/cd-spawn.js'), command[1]);
    break
    case 'os':
      osCommand(command[1]);
    break
    default:
      console.log('\x1b[31m%s','Invalid input command', '\x1b[0m')
  }
}