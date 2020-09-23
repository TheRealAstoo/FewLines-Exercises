import {
  hello,
  foo,
  bar,
  sumResult,
  digits,
  isOpen,
  empty
} from "../src/index";

describe("constants values", () => {
  test("hello should have a value of Sparta", () => {
    expect(hello).toBe("Sparta");
  });

  test("foo should have a value of 12", () => {
    expect(foo).toBe(12);
  });

  test("bar should have a value of 8", () => {
    expect(bar).toBe(8);
  });

  test("sumResult should have a value of foo + bar", () => {
    expect(sumResult).toBe(foo + bar);
  });

  test("digits should have a value of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
    expect(digits).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test("isOpen should have a value of false", () => {
    expect(isOpen).toBe(false);
  });

  test("empty should have a value of null", () => {
    expect(empty).toBe(null);
  });
});
