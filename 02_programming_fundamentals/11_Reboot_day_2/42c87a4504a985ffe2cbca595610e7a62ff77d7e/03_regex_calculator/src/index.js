const readline = require("readline");
const calculator = require("./calculator");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Enter an operation> ", (operation) => {
  const result = calculator(operation);
  console.log(`${operation} = ${result}`);
});
