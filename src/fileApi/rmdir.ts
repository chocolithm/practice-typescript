import { rimraf } from 'rimraf';
import { fileExists } from './fileExists';

export const rmdir = (dirname: string): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    const alreadyExists = await fileExists(dirname);
    !alreadyExists ? resolve(dirname) : await rimraf(dirname);
  })
}