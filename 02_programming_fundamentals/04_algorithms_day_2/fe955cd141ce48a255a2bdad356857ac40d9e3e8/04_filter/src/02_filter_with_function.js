function filter(array, fn) {
  let newArray = [];
  array.forEach(function (number) {
    if (fn(number) === true) {
      newArray.push(number);
    }
  });
  return newArray;
}



// do not remove this line, it is for tests
module.exports = filter;