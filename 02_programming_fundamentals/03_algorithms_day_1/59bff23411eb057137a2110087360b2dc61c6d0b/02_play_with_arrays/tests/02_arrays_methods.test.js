/* global beforeAll describe test expect */
const fs = require("fs");
const path = require("path");
const readcode = require("./readcode");

let studentCode;

beforeAll(() => {
  // Loads the student's code
  studentCode = readcode(
    path.resolve(__dirname, "../src/02_arrays_methods.js")
  );
  return studentCode;
});

describe("#digits", () => {
  test("Should be an array with integers from 0 to 9", () => {
    return studentCode.then((code) => {
      const digits = eval(code + "; digits;");

      expect(digits).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });

  test("Should be defined with multiple push", () => {
    return studentCode.then((code) => {
      const found = code.match(/digits(\s*?)\.push/g);

      if (/for\s*?\((.*?);(.*?);(.*?)\)/.test(code)) {
        console.warn(
          "Smart move to use a loop, but no loops authorized in this exercise !"
        );
      }
      if (/while\s*?\((.*?)\)/.test(code)) {
        console.warn(
          "Smart move to use a loop, but no loops authorized in this exercise !"
        );
      }

      if (found !== null) {
        expect(found.length).toBe(10);
      }
    });
  });
});

describe("#last", () => {
  test("Should have a value of 9", () => {
    return studentCode.then((code) => {
      const last = eval(code + "; last;");

      expect(last).toEqual(9);
    });
  });

  test("Should be linked to the last cell of the variable digits", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp(/(let|const) last/m),
        "digits.push(true); $&"
      );
      const last = eval(changedStudentCode + "; last;");
      expect(last).toBe(true);
    });
  });
});

test("#litteralDigits should be equal to an array with numbers spelled out as strings from zero to nine", () => {
  return studentCode.then((code) => {
    const litteralDigits = eval(code + "; litteralDigits;");

    expect(litteralDigits).toEqual([
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ]);
  });
});

describe("#allDigits", () => {
  test("Should be equal to a string 'zero - one - two ...'", () => {
    return studentCode.then((code) => {
      const allDigits = eval(code + "; allDigits;");

      expect(allDigits).toEqual(
        "zero - one - two - three - four - five - six - seven - eight - nine"
      );
    });
  });

  test("Should be linked to litteralDigits. Changing it should change allDigits", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp(/(let|const) allDigits/m),
        "litteralDigits[5] = 'cinq'; $&"
      );
      const allDigits = eval(changedStudentCode + "; allDigits;");
      expect(allDigits).toBe(
        "zero - one - two - three - four - cinq - six - seven - eight - nine"
      );
    });
  });
});
