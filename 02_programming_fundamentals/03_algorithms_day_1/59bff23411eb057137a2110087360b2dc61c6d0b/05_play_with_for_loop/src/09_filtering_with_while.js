// ## Iteration on arrays with filter using while
//
// -  Create an array called `litteralDigits` from `zero` to `nine` where each array entry is a spelled-out number;
// -  Using `length`, write on `stdout` each odd values of the table.

const literalDigits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

let stdout = -1;

while (stdout < 9) {
  stdout += 2;
  console.log(literalDigits[stdout]);
}