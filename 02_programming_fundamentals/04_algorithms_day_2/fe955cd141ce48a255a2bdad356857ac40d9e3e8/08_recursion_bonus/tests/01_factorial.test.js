const fact = require("../src/01_factorial");

test("The function factors integers as expected: ", () => {
  expect(fact(5)).toBe(120);
  expect(fact(10)).toBe(3628800);
});

test("The function factors the special case 0", () => {
  expect(fact(0)).toBe(1);
});

test("The function returns null for negative numbers", () => {
  expect(fact(-1)).toBe(null);
});
