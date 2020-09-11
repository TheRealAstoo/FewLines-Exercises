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
  } else {
    return null;
  }
}

console.log(range(1, 5));
console.log(range(5, 1));
console.log(range(2, 2));


// Do not remove last lines, it is for tests
module.exports = range;
