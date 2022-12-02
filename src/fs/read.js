import { getFilePath, FS_ERROR_MSG } from "./utils.js";
import { readFile } from "fs/promises";

const read = async () => {
  const fileToReadPath = getFilePath(import.meta.url, "files/fileToRead.txt");
  try {
    const fileContent = await readFile(fileToReadPath, "utf8");
    console.log(fileContent);
  } catch (error) {
    throw new Error(FS_ERROR_MSG);
  }
};

await read();
