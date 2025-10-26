  import * as fs from 'node:fs/promises';
  import{ join } from 'node:path';

  const create = async () => {
    try {
      const filePath = await join(import.meta.dirname, './files/fresh.txt');
      await fs.writeFile(filePath, 'I am fresh and young');
    } catch {
      throw new Error('FS operation failed');
    }
  };

  await create();
