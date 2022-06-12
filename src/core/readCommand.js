import { openCommand } from './openCommand.js'

export const readCommand = async (userName) => {

  const homePath = process.env.home
  const { stdin, stdout } = process;

  console.log('\x1b[33m%s','You are currently in', homePath, '\x1b[0m')
  stdout.write('Enter command> ');

  stdin.on('data', data => {

    const command = data.toString().slice(0,-2).split(' ');

    openCommand(command);

    if (command === '.exit') process.exit();

    console.log('\x1b[33m%s','You are currently in', homePath, '\x1b[0m')
    stdout.write('Enter command> ');
  });
  process.on('exit', () => stdout.write(`Thank you for using File Manager, ${userName}!`));
};



