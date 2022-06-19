import { readdir } from 'fs';
import { getCurrentPath } from '../core/params.js';

export const ls = async () => {

  readdir(getCurrentPath(), (err, files) => {

    if (err) throw new Error('Operation failed');
    
    console.log('\n\x1b[36m', files.join("\n"), '\x1b[0m');

  });
}
