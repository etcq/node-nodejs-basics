import { rm } from 'node:fs/promises';
import { join } from 'node:path'

const remove = async () => {
  try {
    const path = await join(import.meta.dirname, './files/fileToRemove.txt');
    await rm(path);
  } catch {
      throw new Error('FS operation failed');
  }
};

await remove();
