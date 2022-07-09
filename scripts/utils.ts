import path from 'path';
import fs from 'fs';

const pkgesPath = path.resolve(__dirname, '..', 'packages');

export function eachPackage(cb: (dir: string) => void) {
  fs.readdirSync(pkgesPath).forEach((dir) => {
    cb(path.resolve(pkgesPath, dir));
  });
}
