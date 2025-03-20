import * as fs from 'fs';
import { fileExists } from './fileExists';

export const deleteFile = (filename: string) : Promise<string> => {
  return new Promise<any>(async (resolve, reject) => {
    const alreadyExists = await fileExists(filename);
    !alreadyExists ? resolve(filename) : await fs.unlink(filename, (error) => {
      error ? reject(error) : resolve(filename);
    });
  })
}