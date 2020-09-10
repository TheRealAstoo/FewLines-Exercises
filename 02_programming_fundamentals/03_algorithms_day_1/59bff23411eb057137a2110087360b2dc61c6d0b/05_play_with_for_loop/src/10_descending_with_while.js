// ## Decreasing Iteration on arrays using while
//
// -  Using `length`, write on `stdout` each values of the `litteralDigits` array, descending.

const litteralDigits = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

let stdout = 10;

while (stdout > 0) {
  stdout -= 1;
  console.log(litteralDigits[stdout]);
}