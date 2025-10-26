import { Transform } from 'stream';
const transform = async () => {
  const reverseData = new Transform({
    transform(chunk, encoding, callback) {
      const reversedChunk = chunk.toString().split('').reverse().join('');
      callback(null, reversedChunk);
    }
  })
  process.stdin.pipe(reverseData).pipe(process.stdout);
};

await transform();
