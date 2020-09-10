const path = require("path");
const readcode = require("./readcode");

let studentCode;
beforeAll(() => {
  studentCode = readcode(path.resolve(__dirname, "../src/index.js"));
  return studentCode;
});
describe("#booleanVariable", () => {
  test("Should have a `true` value.", () => {
    return studentCode.then((code) => {
      const boooleanVariable = eval(code + "; boooleanVariable;");

      expect(boooleanVariable).not.toBe(undefined);
      expect(boooleanVariable).toBe(true);
    });
  });
});

describe("#nullVariable", () => {
  test("Shoud have a 'null' value.", () => {
    return studentCode.then((code) => {
      const nullVariable = eval(code + "; nullVariable;");

      expect(nullVariable).not.toBe(undefined);
      expect(nullVariable).toBe(null);
    });
  });
});

describe("#greetingVariable", () => {
  test("Should have 'Hello World!' as a value.", () => {
    return studentCode.then((code) => {
      const greetingVariable = eval(code + "; greetingVariable;");

      expect(greetingVariable).toBe("Hello World!");
    });
  });
});
