import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

//export const homePath = process.env.home;

let currentPath = process.env.home;

export const getCurrentPath = () => {
  return currentPath;
}

export const setCurrentPath = (newPath) => {
  currentPath = newPath;
}
