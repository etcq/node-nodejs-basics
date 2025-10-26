import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { join } from 'node:path';

const calculateHash = async () => {
  const hash = createHash('sha256');
  const read = createReadStream(join(import.meta.dirname, './files/fileToCalculateHashFor.txt'), { encoding: 'utf-8' });
  read.on('data', (chunk) => hash.update(chunk));
  read.on('end', () => {
    console.log(hash.digest('hex'))
  });
};

await calculateHash();
