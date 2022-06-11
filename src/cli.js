export const parseCommandArgs = (flag) => {
  
  const arrArgs = process.argv.slice(2);

  return arrArgs[0].split(flag + '=')[1]
}

