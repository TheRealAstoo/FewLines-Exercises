function filter(array, str) {
  let newArray = [];
  if (str === "even") {
    array.forEach(function (number) {
      if ((number % 1 !== isNaN) && (number % 2 === 0)) {
        newArray.push(number);
      }
    });
  } else if (str === "odd") {
    array.forEach(function (number) {
      if ((number % 1 !== isNaN) && (number % 2 !== 0)) {
        newArray.push(number);
      }
    }
    );
  } else if (str !== "even" && str !== "odd") {
    return array;
  }
  return newArray;
}

// do not remove this line, it is for tests
module.exports = filter;