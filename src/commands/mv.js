import fs from "fs";

export const mv = async (pathToFile, pathToDestination) => {

  fs.copyFile(pathToFile, pathToDestination,(err) => {
    if (err) {
      console.error(err)
      return
    };
  })
  fs.unlink(pathToFile, () => {});
}
//mv('C:/test/fileformove.txt', 'C:/test/move/fileformove.txt')
// mv C:/test/fileformove.txt C:/test/move/fileformove.txt
// node src/commands/mv