export const readCommand = async (userName) => {

  const { stdin, stdout } = process;

  stdout.write('Enter command> ');
  stdin.on('data', data => {
    const command = data.toString().slice(0,-2);
      if (command === '.exit') process.exit();
    stdout.write('Enter command> ');
  });
  process.on('exit', () => stdout.write(`Thank you for using File Manager, ${userName}!`));
};



