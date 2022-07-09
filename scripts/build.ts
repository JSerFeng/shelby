import { eachPackage } from './utils';
import shelljs from 'shelljs';

eachPackage((dir) => {
  shelljs.cd(dir);
  shelljs.exec('npm run build');
});
