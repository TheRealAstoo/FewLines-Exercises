const isColorful = require("../src/colorful");

describe("Colorful numbers", () => {
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((number) => {
    test(`${number} should return true`, () => {
      expect(isColorful(number)).toEqual(true);
    });
  });

  test("A colorful two digit number should return true", () => {
    expect(isColorful(23)).toEqual(true);
  });

  test("A non colorful two digit number should return false", () => {
    expect(isColorful(10)).toEqual(false);
  });

  test("A colorful three digit number should return true", () => {
    expect(isColorful(987)).toEqual(true);
  });

  test("A non colorful three digit number should return false", () => {
    expect(isColorful(999)).toEqual(false);
  });

  test("A colorful four digit number should return true", () => {
    expect(isColorful(3245)).toEqual(true);
  });

  test("A non colorful four digit number should return false", () => {
    expect(isColorful(1111)).toEqual(false);
  });
});
