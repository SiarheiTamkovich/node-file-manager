import { spawn } from 'child_process';

const cd = spawn('ls', []);

cd.stdout.on("data", data => {
  console.log(`stdout: ${data}`);
});

cd.stderr.on("data", data => {
  console.log(`stderr: ${data}`);
});

cd.on('error', (error) => {
  console.log(`error: ${error.message}`);
});

cd.on("close", code => {
  console.log(`child process exited with code ${code}`);
});

// node