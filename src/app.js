import { parseCommandArgs } from "./cli/cli.js";
import { readCommand } from "./readline.js";

const userNameStr = parseCommandArgs('--username');
export const userName = userNameStr[0].toUpperCase() + userNameStr.slice(1);

console.log('\x1b[36m%s', 'Welcome to the File Manager,', userName + '!', '\x1b[0m');

readCommand(userName);

// for Powershell terminal run commands:
// npm run start -- --username=your_username