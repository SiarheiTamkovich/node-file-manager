import fs from "fs";

export const cp = async (pathToFile, pathToDestination) => {

  fs.copyFile(pathToFile, pathToDestination,(err) => {
    if (err) {
      console.error(err)
      return
    };
  })
}
//cp('C:/test/fileforcopy.txt', 'C:/test/copy/fileforcopy.txt')
// cp C:/test/fileforcopy.txt C:/test/copy/fileforcopy.txt
// node src/commands/cp