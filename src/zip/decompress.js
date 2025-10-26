import {
  createReadStream,
  createWriteStream,
} from 'node:fs';
import  { createGunzip } from 'node:zlib';
import { join } from 'path';

const decompress = async () => {
    const gunzip = createGunzip();
    const destination = createWriteStream(join(import.meta.dirname, './files/fileToCompress.txt'));
    const source = createReadStream(join(import.meta.dirname, './files/archive.gz'));
    source.pipe(gunzip).pipe(destination);
};

await decompress();
