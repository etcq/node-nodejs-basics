import { copyFile, mkdir, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const copy = async () => {
  try {
    const originalFolderPath = await join(import.meta.dirname, './files');
    const copyFolderPath = await join(import.meta.dirname, './files_copy');
    await mkdir(copyFolderPath);
    const files = await readdir(originalFolderPath);
    for ( const file of files ) {
      copyFile(join(originalFolderPath, file), join(copyFolderPath, file));
    }
  } catch {
    throw new Error('FS operation failed');
  } 
};

await copy();
