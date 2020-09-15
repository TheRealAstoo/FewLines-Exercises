const readline = require("readline");

const identityForm = require("./identityForm");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

identityForm(reader);
