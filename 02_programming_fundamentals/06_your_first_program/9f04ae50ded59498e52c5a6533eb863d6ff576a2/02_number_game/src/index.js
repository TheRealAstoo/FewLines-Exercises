const readline = require("readline");

const numberGame = require("./numberGame");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

numberGame(reader);
