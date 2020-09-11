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

// Leave the line below for tests to work properly.
module.exports = fizzBuzz;
