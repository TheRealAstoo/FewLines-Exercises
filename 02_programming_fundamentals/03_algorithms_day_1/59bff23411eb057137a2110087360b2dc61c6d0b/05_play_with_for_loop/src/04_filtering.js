// ## Iteration on arrays with filter
//
// -  Create an array called `literalDigits` from `zero` to `nine` where each array entry is a spelled-out number;
// -  Using `length`, write on `stdout` each odd values of the table.

const literalDigits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

for (let i = 1; i <= (literalDigits.length - 1); i += 2) {
  console.log(literalDigits[i]);
}