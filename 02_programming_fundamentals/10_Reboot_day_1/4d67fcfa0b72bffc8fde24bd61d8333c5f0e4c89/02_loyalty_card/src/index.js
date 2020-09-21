import readline from "readline";
import vendorMachine from "./vendorMachine.js"


const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

vendorMachine(reader);