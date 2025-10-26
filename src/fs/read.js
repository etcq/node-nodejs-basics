import { join } from 'node:path'
import { readFile } from 'node:fs/promises';

const read = async () => {
  const path = await join(import.meta.dirname, './files/fileToRead.txt');
  const fileContent = await readFile(path, { encoding: 'utf-8' });
  console.log(fileContent);
};

await read();
