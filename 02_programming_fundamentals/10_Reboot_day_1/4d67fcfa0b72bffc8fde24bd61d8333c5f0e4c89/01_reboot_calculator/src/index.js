import readline from "readline";
import calculator from "./calculator.js";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



calculator(reader);



