import { createReadStream } from "fs";
import { getFilePath } from "../fs/utils.js";

const read = async () => {
  const fileToReadPath = getFilePath(import.meta.url, "files/fileToRead.txt");
  const readableStream = createReadStream(fileToReadPath);
  readableStream.pipe(process.stdout);
};

await read();
