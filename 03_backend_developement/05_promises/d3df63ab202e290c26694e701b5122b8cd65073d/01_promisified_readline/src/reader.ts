// ⚠️ Don't change this file
import * as readline from "fwl-readline";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function closeRl(reader = rl): void {
  reader.close();
}
