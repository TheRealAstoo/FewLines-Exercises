function joinArray(array, accumulator) {
  let newArray = array.reduce(function (previousValue, currentValue) {
    return `${previousValue}${accumulator}${currentValue}`;
  });
  
  return newArray;
}

// ⚠ Do not remove me ! It's for tests
module.exports = joinArray;
