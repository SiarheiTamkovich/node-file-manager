import fs from "fs";

export const rn = async (pathToFile, pathToDestination) => {

  fs.copyFile(pathToFile, pathToDestination,(err) => {
    if (err) {
      console.error(err)
      return
    };
    fs.unlink(pathToFile, () => {});
  })
}
//rn('C:/test/fileforrename.txt', 'C:/test/fileforrenameNewName.txt');
// rn C:/test/fileforrename.txt C:/test/fileforrenameNewName.txt
// node src/commands/rn