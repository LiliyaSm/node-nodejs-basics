import { getFilePath, FS_ERROR_MSG } from "./utils.js";
import { rename as renameFS } from "fs/promises";
import fs from "fs";

const rename = async () => {
  const wrongFilenamePath = getFilePath(
    import.meta.url,
    "files/wrongFilename.txt"
  );
  const newFilenamePath = getFilePath(
    import.meta.url,
    "files/properFilename.md"
  );

  try {
    //make sure that properFilename.md doesn't already exists
    if (fs.existsSync(newFilenamePath)) throw new Error(FS_ERROR_MSG);
    await renameFS(wrongFilenamePath, newFilenamePath);
  } catch {
    throw new Error(FS_ERROR_MSG);
  }
};

await rename();

// rename.js - implement function that renames file wrongFilename.txt to properFilename with extension .md (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)
