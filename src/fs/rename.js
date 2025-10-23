import * as fs from 'node:fs/promises';
import { join } from 'node:path';

const rename = async () => {
  try {
      const path = import.meta.dirname
      const oldNamePath = await join(import.meta.dirname, './files/wrongFilename.txt');
      const newNamePath = await join(import.meta.dirname, './files/properFilename.md');
      await fs.rename(oldNamePath, newNamePath);
  } catch {
    throw new Error('FS operation failed');
  } 

};

await rename();
