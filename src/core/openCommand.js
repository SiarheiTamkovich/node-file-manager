import { osCommand } from "../commands/os.js";

export const openCommand = (command) => {

  switch (command[0]){
    case 'up':
      
    break
    case 'os':
      osCommand(command[1]);
    break
    default:
      console.log('\x1b[31m%s','Invalid input command', '\x1b[0m')
  }
}