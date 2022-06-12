import fs from 'fs';
import { createHash } from 'crypto';

export const hash = async (filePath) => {

  const hashCalc = (str) => {
    return createHash('sha256').update(str).digest('hex');
  }
  
  const readableStream = fs.createReadStream(filePath, 'utf-8');
  readableStream.on('data', chunk => console.log('\n\x1b[36m%s\x1b[0m', hashCalc(chunk)));
};
//hash('C:/Users/User/test.txt');
// node src/commands/hash