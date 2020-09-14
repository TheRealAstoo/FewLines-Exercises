function fact(n) {
  let f = [];
  let calc;

  if (n === 0) {
    calc = 1;
  } else if (n < 0) {
    calc = null;
  } else {
    for (let i = 1; i <= n; i++) {
      f.push(i);
    }
  
    calc = f.reduce(function(accumulator, currentValue) {
      return accumulator * currentValue;
    });
  }
  return calc;
}
// do not remove this line, it is for tests
module.exports = fact;
