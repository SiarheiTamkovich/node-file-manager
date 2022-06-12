import fs from "fs";

export const rm = async (pathFile) => {
  
  fs.access(pathFile, fs.F_OK, (err) => {
    if(err) return console.log('Operation failed');
    fs.unlink(pathFile, () => {});
  })
};
//rm();
// rm C:/test/fileforremove.txt
// node src/commands/rm