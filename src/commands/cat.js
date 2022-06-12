import fs from "fs";

export const cat = async (pathFile) => {

  fs.access(pathFile, fs.F_OK, (err)=> {
    if(err) return console.error('\x1b[31m%s\x1b[0m','Operation failed');
    fs.readFile(pathFile, 'utf8', (err, data) => console.log('\n\x1b[36m%s\x1b[0m', data));
  });
};
//cat('C:/Users/User/test.txt')
// node src/commands/cat
