import { createWriteStream } from 'fs';
import { stdin } from 'process';
import { join } from 'path';

const write = async () => {
  const output = createWriteStream(join(import.meta.dirname, './files/fileToWrite.txt'));
  stdin.pipe(output);
};

await write();
