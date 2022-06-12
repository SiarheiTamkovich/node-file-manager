import path from 'path';
import { getCurrentPath, setCurrentPath } from '../core/params.js'

export const up = async () => {
  setCurrentPath(path.join(getCurrentPath(), '..'));
}
// up();
// node src/commands/up