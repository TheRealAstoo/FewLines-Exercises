// Leave the line below for tests to work properly
// 🚧 Need to write the reason, which will come when I'll do the readline mock tests 🚧
import * as readline from "readline";
import { holidayLocationFinder } from "./holidayLocationFinder";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

holidayLocationFinder(reader);
