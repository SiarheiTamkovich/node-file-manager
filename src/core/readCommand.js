import { openCommand } from './openCommand.js';
import { getCurrentPath } from './params.js';

export const readCommand = async (userName) => {
  
  const { stdin, stdout } = process;

  const exitMessage = () => {
    console.log('\x1b[36m%s', `\n Thank you for using File Manager, ${userName}! \n`,'\x1b[0m');
  }

  const pathMessage = () => {
    console.log('You are currently in', '\x1b[33m', getCurrentPath() , '\x1b[0m','\n');
  }
  pathMessage();
  
  stdout.write('Enter command> ');

  stdin.on('data', data => {
    const command = data.toString().slice(0,-2).split(' ');
    openCommand(command);
    pathMessage();
    stdout.write('Enter command> ');
  });

  process.on('SIGINT', () => {
    process.exit();
  })
  process.on('exit', () => exitMessage());
};
