function fizzBuzz(list) {
  let fizzList = [];
  if ((list.length < 16) && (list.length > 0)) {
    fizzList = list.map(function(number) {
      if (((number % 3 === 0) && (number % 5 === 0))) {
        return "FizzBuzz";
      } else if (number % 3 === 0) {
        return "Fizz";
      } else if (number % 5 === 0) {
        return "Buzz";
      } else {
        return number;
      }
    });
  }
  return fizzList;
}

function range(firstNumber, secondNumber) {
  const array = [];
  if (firstNumber < secondNumber) {
    let i = firstNumber - 1;
    while (i <  secondNumber) {
      i++;
      array.push(i);
    }
    return array;
  } else if (firstNumber > secondNumber) {
    let i = firstNumber + 1;
    while (i > secondNumber) {
      i--;
      array.push(i);
    }
    return array;
  } else if (firstNumber === secondNumber) {
    array.push(firstNumber);
    return array;
  } 
}

console.log(fizzBuzz(range(1, 5)));
console.log(range(1, 5));
// Leave the line below untouched for tests to work properly.
module.exports = fizzBuzz;
