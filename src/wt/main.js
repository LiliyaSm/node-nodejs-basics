// main.js - implement function that creates number of worker threads (equal to the number of host machine logical CPU cores) from file worker.js and able
// to send data to those threads and to receive result of the computation from them. You should send incremental number starting from 10 to each worker.
// For example: on host machine with 4 cores you should create 4 workers and send 10 to first worker, 11 to second worker, 12 to third worker, 13 to fourth worker.
// After all workers will finish, function should log array of results into console. The results are array of objects with 2 properties:
// status - 'resolved' in case of successfully received value from worker or 'error' in case of error in worker
// data - value from worker in case of success or null in case of error in worker
import { cpus } from "os";
import { getFilePath } from "../fs/utils.js";
import { Worker } from "worker_threads";

const performCalculations = async () => {
  const cpuCoresNumber = cpus();
  const workerScriptPath = getFilePath(import.meta.url, "./worker.js");
  let workerNumber = 10;
  const workersPromises = await Promise.allSettled(
    cpuCoresNumber.map(() => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(workerScriptPath, {
          workerData: workerNumber++,
        });
        worker.on("message", (message) => resolve(message));
        worker.on("error", (error) => reject(error));
      });
    })
  );
  const workersResult = workersPromises.map(({ status, value }) => ({
    status: status === "fulfilled" ? "resolved" : "error",
    data: status === "fulfilled" ? value : null,
  }));

  console.log(workersResult);
};

await performCalculations();
