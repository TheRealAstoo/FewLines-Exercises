function fibo(n) {
  const result = [0, 1];
  if (n >= 0) {
    for (let i = 2; i <= n; i++) {
      const a = result[i - 1];
      const b = result[i - 2];
      result.push(a + b);
    }
  } else {
    return null;
  }

  return result[n];
}

console.log(fibo(10));
// do not remove this line, it is for tests
module.exports = fibo;
