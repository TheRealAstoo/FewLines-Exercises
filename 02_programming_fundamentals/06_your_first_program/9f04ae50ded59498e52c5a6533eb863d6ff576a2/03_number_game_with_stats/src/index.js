const readline = require("readline");

const numberGameWithStats = require("./numberGameWithStats");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

numberGameWithStats(reader);
