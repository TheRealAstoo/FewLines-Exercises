function fact(n) {
  let f = [];
  if (n === 1 || n === 0)
    return 1;
  if (n < 0)
    return null;
  if (f[n] > 0)
    return f[n];

  f[n] = fact(n-1) * n;

  const calc = f.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });

  return calc;
}

// do not remove this line, it is for tests
module.exports = fact;
