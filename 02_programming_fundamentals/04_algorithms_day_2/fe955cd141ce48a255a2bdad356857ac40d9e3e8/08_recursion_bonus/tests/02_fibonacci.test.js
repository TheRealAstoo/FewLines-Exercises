const fibo = require("../src/02_fibonacci");

test("The function 'fibo' generates the right series' element: ", () => {
  expect(fibo(10)).toBe(55);
  expect(fibo(3)).toBe(2);
});

test("The function handles the special case 0", () => {
  expect(fibo(0)).toBe(0);
});

test("The function should return null for negative numbers", () => {
  expect(fibo(-1)).toBe(null);
});
