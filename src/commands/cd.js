import path from 'path';
import fs from 'fs';
import { getCurrentPath, setCurrentPath } from '../core/params.js'

export const cd = (newPath) => {
//  console.log(getCurrentPath());
  let makePath;

  if (path.isAbsolute(newPath)) {
    makePath = newPath;
  } else {
    makePath = path.join(getCurrentPath(), newPath);
  }

  try {
    fs.accessSync(makePath);
    setCurrentPath(makePath);
//    console.log(makePath)
  } catch (err) {
      console.log(err)
      console.log('\x1b[31m%s','Operation failed', '\x1b[0m');
  }
}
//cd('test');
//cd('c:/test');
//cd('c:/users/user)
// node src/commands/cd