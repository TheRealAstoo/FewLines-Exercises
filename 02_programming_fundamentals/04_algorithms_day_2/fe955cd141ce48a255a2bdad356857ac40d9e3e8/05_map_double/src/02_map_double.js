function double(x) {
  return x * 2;
}

function map(array, func) {
  const newArray = array.map(x => func(x));
  return newArray;
}

// Do not remove last lines, it is for tests
module.exports = { double: double, map: map };
