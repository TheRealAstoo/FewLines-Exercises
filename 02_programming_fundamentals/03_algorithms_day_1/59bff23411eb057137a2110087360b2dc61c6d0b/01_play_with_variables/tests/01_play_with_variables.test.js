/* global beforeAll describe test expect */
const fs = require("fs");
const path = require("path");
const readcode = require("./readcode");

let studentCode;
beforeAll(() => {
  // Loads the student's code
  studentCode = readcode(
    path.resolve(__dirname, "../src/01_play_with_variables.js")
  );
  return studentCode;
});

test("#hello should have 'sparta' as a value", () => {
  return studentCode.then((code) => {
    const hello = eval(code + "; hello;");

    expect(hello).toBe("Sparta");
  });
});

test(`#currentYear should have an integer ${new Date().getFullYear()} as a value`, () => {
  return studentCode.then((code) => {
    const currentYear = eval(code + "; currentYear;");

    expect(currentYear).toBe(new Date().getFullYear());
  });
});

test("#foo should have an integer 12 as a value", () => {
  return studentCode.then((code) => {
    const foo = eval(code + "; foo;");

    expect(foo).toBe(12);
  });
});

test("#bar should have an integer 28 as a value", () => {
  return studentCode.then((code) => {
    const bar = eval(code + "; bar;");

    expect(bar).toBe(28);
  });
});

describe("#sumResult", () => {
  test("Should be the sum of foo and bar as a value", () => {
    return studentCode.then((code) => {
      const sumResult = eval(code + "; sumResult;");

      expect(sumResult).toBe(40);
    });
  });

  test("Should be linked to foo and bar. Changing foo should update it", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp(/(let|const)(\s*?)foo(\s*?)=(\s*?)([0-9]{2})(\s*?);/),
        "const foo = 10;"
      );
      const sumResult = eval(changedStudentCode + "; sumResult;");
      expect(sumResult).toBe(38);
    });
  });

  test("Should be linked to foor and bar. Changing bar should update it", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp(/(let|const)(\s*?)bar(\s*?)=(\s*?)([0-9]{2})(\s*?);/),
        "const bar = 10;"
      );
      const sumResult = eval(changedStudentCode + "; sumResult;");
      expect(sumResult).toBe(22);
    });
  });
});

describe("#prodResult", () => {
  test("Should be the product of bar and foo", () => {
    return studentCode.then((code) => {
      const prodResult = eval(code + "; prodResult;");

      expect(prodResult).toBe(336);
    });
  });

  test("Should be linked to foor and bar. Changing foo should update it", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp(/(let|const)(\s*?)foo(\s*?)=(\s*?)([0-9]{2})(\s*?);/),
        "const foo = 10;"
      );
      const prodResult = eval(changedStudentCode + "; prodResult;");
      expect(prodResult).toBe(280);
    });
  });

  test("Should be linked to foor and bar. Changing bar should update it", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp(/(let|const)(\s*?)bar(\s*?)=(\s*?)([0-9]{2})(\s*?);/),
        "const bar = 10;"
      );
      const prodResult = eval(changedStudentCode + "; prodResult;");
      expect(prodResult).toBe(120);
    });
  });
});

test("#promo should be an object with the correct keys and values", () => {
  return studentCode.then((code) => {
    const promo = eval(code + "; promo;");
    const expected = {
      year: 2020,
      kind: "Sparta",
    };
    expect(promo).toEqual(expected);
  });
});

describe("#prodResult", () => {
  test("Should be linked to currentYear. Changing currentYear should update it", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp(
          /(let|const)(\s*?)currentYear(\s*?)=(\s*?)([0-9]{4})(\s*?);/
        ),
        "const currentYear = 2000;"
      );
      const promo = eval(changedStudentCode + "; promo;");
      const expected = {
        year: 2000,
        kind: "Sparta",
      };
      expect(promo).toEqual(expected);
    });
  });

  test("#promoYear should be an integer with the correct value", () => {
    return studentCode.then((code) => {
      const promoYear = eval(code + "; promoYear;");

      expect(promoYear).toEqual(2020);
    });
  });

  test("#promoYear should be linked to promo. Changing the year inside promo should update it", () => {
    return studentCode.then((code) => {
      const changedStudentCode = code.replace(
        new RegExp("(let|const) promoYear"),
        "promo.year = 2000; $&"
      );
      const promoChanged = eval(changedStudentCode + "; promoYear;");
      expect(promoChanged).toEqual(2000);
    });
  });
});

test("#digits should be an array with the correct values", () => {
  return studentCode.then((code) => {
    const digits = eval(code + "; digits;");

    expect(digits).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
