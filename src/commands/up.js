import path from 'path';
import { getCurrentPath, setCurrentPath } from '../core/params.js'

export const up = () => {
  setCurrentPath(path.join(getCurrentPath(), '..'));
}
// up();
// node src/commands/up