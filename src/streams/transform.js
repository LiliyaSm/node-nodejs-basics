import { Transform, pipeline } from "stream";
const transform = async () => {
  const transform = new Transform({
    transform(chunk, enc, cb) {
      const chunkStringified = chunk.toString().trim();
      const chunkReversed = chunkStringified.split("").reverse().join("");
      cb(null, chunkReversed + "\n");
    },
  });
  pipeline(process.stdin, transform, process.stdout, (err) => console.log(err));
};

await transform();
