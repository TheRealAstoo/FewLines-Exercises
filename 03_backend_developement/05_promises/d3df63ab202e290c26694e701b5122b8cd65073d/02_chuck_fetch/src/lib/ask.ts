// Don't change this file

import { rl } from "./reader";

export default function ask(question: string, reader = rl): Promise<string> {
  return new Promise((resolve, reject) => {
    reader.question(question, (input: string) => {
      if (input === "") {
        reject(new Error("Invalid input"));
      }
      resolve(input);
    });
  });
}
