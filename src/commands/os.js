import os from 'os'

export const osCommand = async (args) => {
  
  switch (args.slice(2)) {
    case 'EOL':
      console.log('\x1b[32m%s','EOL:', JSON.stringify(os.EOL),'\x1b[0m')
    break
    case 'cpus':
      console.log('\x1b[32m%s','Cpus:', os.cpus(),'\x1b[0m')
    break
    case 'homedir':
      console.log('\x1b[32m%s','HomeDir:', os.homedir(),'\x1b[0m')
    break
    case 'username':
      console.log('\x1b[32m%s','UserName:', os.userInfo().username,'\x1b[0m')
    break
    case 'architecture':
      console.log('\x1b[32m%s','Architecture:', os.arch(),'\x1b[0m')
    break
    default:
      console.log('\x1b[31m%s', 'Invalid input params','\x1b[0m')
  }
}