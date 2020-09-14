function pow(number, power) {
  let f = [];
  let calc;

  for (let i = 1; i <= power; i++) {
    f.push(number);
  }

  if (power === 0 || power === 1) {
    calc = 1;
  }

  if (f.length > 0) {
    calc = f.reduce(function (accumulator, currentValue) {
      return accumulator * currentValue;
    });
  }
  console.log(f);
  return calc;
}

// do not remove this line, it is for tests
module.exports = pow;
