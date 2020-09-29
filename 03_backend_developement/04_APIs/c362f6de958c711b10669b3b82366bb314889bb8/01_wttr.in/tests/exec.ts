// const exec = require("child_process").exec;
import * as childProcess from "child_process"
const exec = childProcess.exec

function execPromise(command: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    exec(command, (error: Error, stdout: string, stderr: string) => {
      if (error) {
        return reject(error);
      }
      resolve([stdout, stderr]);
    });
  });
}

module.exports = execPromise;
