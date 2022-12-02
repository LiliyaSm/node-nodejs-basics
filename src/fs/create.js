import { writeFile } from "fs/promises";
import { getFilePath, FS_ERROR_MSG } from "./utils.js";

const create = async () => {
  try {
    const filepath = getFilePath(import.meta.url, "files/fresh.txt");
    await writeFile(filepath, "I am fresh and young", { flag: "wx" });
  } catch (err) {
    if (err.code === "EEXIST") throw new Error(FS_ERROR_MSG);
  }
};

await create();
