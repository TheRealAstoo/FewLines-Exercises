function double(array) {
  const newArray = array.map(x => x * 2);
  return newArray;
}

// Do not remove last lines, it is for tests
module.exports = double;
