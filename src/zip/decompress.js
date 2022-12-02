import { createUnzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { getFilePath } from "../fs/utils.js";

const decompress = async () => {
  const input = getFilePath(import.meta.url, "files/archive.gz");
  const output = getFilePath(import.meta.url, "files/fileToCompress.txt");
  const unzip = createUnzip();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  source.pipe(unzip).pipe(destination);
};

await decompress();
