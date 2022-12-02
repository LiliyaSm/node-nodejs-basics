import { getFilePath, FS_ERROR_MSG } from "./utils.js";
import { readdir } from "fs/promises";

const list = async () => {
  const src = getFilePath(import.meta.url, "files");
  try {
    const files = await readdir(src, { withFileTypes: true });
    files.map(({ name }) => console.log(name));
  } catch (error) {
    throw new Error(FS_ERROR_MSG);
  }
};

await list();
