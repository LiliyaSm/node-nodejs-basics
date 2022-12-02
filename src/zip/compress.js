import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { getFilePath } from "../fs/utils.js";

const compress = async () => {
  const input = getFilePath(import.meta.url, "files/fileToCompress.txt");
  const output = getFilePath(import.meta.url, "files/archive.gz");
  const gzip = createGzip();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  source.pipe(gzip).pipe(destination);
};

await compress();
