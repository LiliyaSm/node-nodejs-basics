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
    //make sure that properFilename.md doesn't already exist
    if (fs.existsSync(newFilenamePath)) throw new Error(FS_ERROR_MSG);
    await renameFS(wrongFilenamePath, newFilenamePath);
  } catch {
    throw new Error(FS_ERROR_MSG);
  }
};

await rename();
