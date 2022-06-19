import fs from 'fs';
import { getCurrentPath } from '../core/params.js'

export const add = async (fileName) => {

  fs.appendFile(getCurrentPath() + '/' + fileName, '', function (err) {
    if (err) throw err;
  });
}
//add('newFile.txt');
// add newFile.txt
// node src/commands/add