import { copyFile, mkdir, readdir } from "fs/promises";
import path from "path";
import { getFilePath, FS_ERROR_MSG } from "./utils.js";

const copy = async () => {
  const src = getFilePath(import.meta.url, "files");
  const dest = getFilePath(import.meta.url, "files_copy ");

  try {
    await mkdir(dest);
    const files = await readdir(src, { withFileTypes: true });
    for (const file of files) {
      let srcPath = path.join(src, file.name);
      let destPath = path.join(dest, file.name);
      await copyFile(srcPath, destPath);
    }
  } catch {
    throw new Error(FS_ERROR_MSG);
  }
};

copy();
