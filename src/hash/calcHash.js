import crypto from "crypto";
import { getFilePath } from "../fs/utils.js";
import { readFile } from "fs/promises";

const calculateHash = async () => {
  try {
    const fileToReadPath = getFilePath(
      import.meta.url,
      "files/fileToCalculateHashFor.txt"
    );
    const fileBuffer = await readFile(fileToReadPath);
    const hashSum = crypto.createHash("sha256");
    hashSum.update(fileBuffer);
    const hex = hashSum.digest("hex");
    
    console.log(hex);
  } catch (err) {
    throw err;
  }
};

await calculateHash();
