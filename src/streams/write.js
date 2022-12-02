import { createWriteStream } from "fs";
import { getFilePath } from "../fs/utils.js";

const write = async () => {
  const fileToWritePath = getFilePath(import.meta.url, "files/fileToWrite.txt");
  const writeStream = createWriteStream(fileToWritePath);
  process.stdin.pipe(writeStream);
};

await write();
