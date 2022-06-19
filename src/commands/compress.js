import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';

export const compress = async (pathToFile, pathToDestination) => {

  const source = fs.createReadStream(pathToFile);
  const destination = fs.createWriteStream(pathToDestination);
  const gzip = zlib.createGzip();

  pipeline(source, gzip, destination, err => {
    if (err) throw err;
  })
}
//compress('C:/test/fileforcompress.txt', 'C:/test/fileforcompress.gz');
// compress C:/test/fileforcompress.txt C:/test/fileforcompress.gz
// node src/commands/compress 
