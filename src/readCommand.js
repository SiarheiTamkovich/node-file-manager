import { openCommand } from './commands/openCommand.js'

export const readCommand = async (userName) => {

  const homePath = process.env.home
  const { stdin, stdout } = process;

  console.log('You are currently in', homePath)

  stdout.write('Enter command> ');
  stdin.on('data', data => {
    const command = data.toString().slice(0,-2).split(' ');
    openCommand(command);
    if (command === '.exit') process.exit();
    stdout.write('Enter command> ');
  });
  process.on('exit', () => stdout.write(`Thank you for using File Manager, ${userName}!`));
};



