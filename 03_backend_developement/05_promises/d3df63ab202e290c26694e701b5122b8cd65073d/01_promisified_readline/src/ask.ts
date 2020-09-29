import { rl } from "./reader";

function ask(question: string, reader = rl): Promise<string> {
  return new Promise((resolve, reject) => {
    reader.question(question, (input) => {
      if (input === "") {
        reject("Error: Invalid input");
      } else {
        resolve(input);
      }
    });
  });
}

// Leave line below for tests to work properly
export default ask;
