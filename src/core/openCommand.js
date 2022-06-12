import { osCommand } from "../commands/os.js";
import { __dirname } from "./params.js";
import { up } from '../commands/up.js';
import { cd } from "../commands/cd.js";
import { ls } from "../commands/ls.js";
import { cat } from "../commands/cat.js";
import { hash } from "../commands/hash.js";
import { compress } from "../commands/compress.js";
import { decompress } from "../commands/decompress.js";
import { cp } from "../commands/cp.js";
import { mv } from "../commands/mv.js";

export const openCommand = async (command) => {

  switch (command[0]){
    case '.exit':
      process.exit();
    break
    case 'up':
      up();
    break
    case 'cd':
      cd(command[1]);
    break
    case 'ls':
      ls();
    break
    case 'cat':
      cat(command[1]);
    break
    case 'hash':
      hash(command[1]);
    break
    case 'os':
      osCommand(command[1]);
    break
    case 'compress':
      compress(command[1], command[2]);
    break
    case 'decompress':
      decompress(command[1], command[2]);
    break
    case 'cp':
      cp(command[1], command[2]);
    break
    case 'mv':
      mv(command[1], command[2]);
    break
    default:
      console.log('\x1b[31m%s','Invalid input command', '\x1b[0m')
  }
}