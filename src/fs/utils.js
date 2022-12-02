import { fileURLToPath } from "url";
import path from "path";

export const FS_ERROR_MSG = "FS operation failed";

export const getFilePath = (dirPath, pathToJoin) => {
  const __dirname = fileURLToPath(new URL(".", dirPath));
  return path.join(__dirname, pathToJoin);
};
