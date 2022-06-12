import { fileURLToPath } from 'url';
import { dirname } from 'path';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

let currentPath = os.homedir();

export const getCurrentPath = () => {
  return currentPath;
}

export const setCurrentPath = (newPath) => {
  currentPath = newPath;
}
