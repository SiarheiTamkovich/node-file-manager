import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';

export const decompress = async (pathToFile, pathToDestination) => {

  const source = fs.createReadStream(pathToFile);
  const destination = fs.createWriteStream(pathToDestination);
  const gzip = zlib.createGunzip();

  pipeline(source, gzip, destination, err => {
    if (err) throw err;
  })
}
//decompress('C:/test/fileforcompress.gz', 'C:/test/fileforcompress.txt');
// decompress C:/test/fileforcompress.gz C:/test/fileforcompress.txt
// node src/commands/decompress 
