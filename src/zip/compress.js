import {
  createReadStream,
  createWriteStream,
} from 'node:fs';
import  { createGzip } from 'node:zlib';
import { join } from 'path';

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(join(import.meta.dirname, './files/fileToCompress.txt'));
  const destination = createWriteStream(join(import.meta.dirname, './files/archive.gz'));
  source.pipe(gzip).pipe(destination);
};

await compress();
