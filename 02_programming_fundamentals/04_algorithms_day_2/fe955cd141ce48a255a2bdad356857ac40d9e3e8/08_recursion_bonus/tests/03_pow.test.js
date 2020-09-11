const pow = require("../src/03_pow");

test("The function 'pow' properly calculates powers :", () => {
  expect(pow(2, 8)).toBe(Math.pow(2, 8));
  expect(pow(4, 42)).toBe(Math.pow(4, 42));
});

test("The function handles exceptions", () => {
  expect(pow(1, 1)).toBe(Math.pow(1, 1));
  expect(pow(2, 0)).toBe(Math.pow(2, 0));
  expect(pow(0, 2)).toBe(Math.pow(0, 2));
  expect(pow(0, 0)).toBe(Math.pow(0, 0));
});

test("You should not use the existing 'Math.pow' function", () => {
  let filterCalled = false;

  const originalFilter = Math.pow;
  const powWrapper = function () {
    filterCalled = true;
    return originalFilter.apply(this, arguments);
  };

  Math.pow = powWrapper;

  const result = pow(2, 2);

  expect(result).not.toBe(undefined);
  expect(filterCalled).toBe(false);
});
