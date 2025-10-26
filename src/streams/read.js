import { createReadStream } from 'fs';
import { stdout } from 'process';

const read = async () => {
  const read = createReadStream('./src/streams/files/fileToRead.txt', { encoding: 'utf-8' });
  read.on('data', (chunk) => {
    stdout.write(chunk);
  }) 
};

await read();
