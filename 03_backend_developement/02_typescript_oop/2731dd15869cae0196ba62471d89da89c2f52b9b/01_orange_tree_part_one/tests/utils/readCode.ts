/*
  This file is for teachers to help with the tests.
 */
import * as fs from "fs";

export function readCode(path: string): Promise<string> {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, "utf8", function (err, text) {
      if (err) {
        reject(err);
        return;
      }
      const studentCode = text
        .replace(/\/\*([^]*?)\*\//gm, "") // multiline comments
        .replace(/\/\/[^]*?\n/g, "") // single line comments
        .trim();

      if (studentCode.length) {
        resolve(studentCode);
      } else {
        reject("File does not contain any code");
      }
    });
  });
}
