import { readdir } from 'node:fs/promises';
import { join } from 'node:path'

const list = async () => {
  try {
    const files = await readdir(join(import.meta.dirname, './files'));
    console.log(files);
  } catch {
    throw new Error('FS operation failed');
  }

};

await list();
