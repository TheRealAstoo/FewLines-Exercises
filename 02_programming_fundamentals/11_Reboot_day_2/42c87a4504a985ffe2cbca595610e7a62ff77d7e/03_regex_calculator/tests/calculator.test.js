const calc = require("../src/calculator");

const testOperations = [
  { op: "1+1", result: 2 },
  { op: "1 - 1", result: 0 },
  { op: "4 /2", result: 2 },
  { op: "1.5 * 2,5", result: 3.75 },
];

describe("#calculator", () => {
  testOperations.forEach((test) => {
    it(`Should return ${test.result} for '${test.op}'.`, () => {
      expect(calc(test.op)).toBe(test.result);
    });
  });

  it("Should throw an error when not provided with valid operation", () => {
    expect.assertions(2);

    try {
      calc("Not a valid operation");
    } catch (error) {
      expect(error).not.toBeNull();
      expect(error.message).toBe("Can't process the operation");
    }
  });
});
