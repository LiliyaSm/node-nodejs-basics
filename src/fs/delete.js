import { getFilePath, FS_ERROR_MSG } from "./utils.js";
import { rm } from "fs/promises";

const remove = async () => {
  const fileToRemovePath = getFilePath(
    import.meta.url,
    "files/fileToRemove.txt"
  );
  try {
    await rm(fileToRemovePath);
  } catch {
    throw new Error(FS_ERROR_MSG);
  }
};

await remove();
