/* global beforeAll test expect */
const fs = require("fs");
const path = require("path");
const readcode = require("./readcode");

let studentCode;
beforeAll(() => {
  // Loads the student's code
  studentCode = readcode(path.resolve(__dirname, "../src/06_sea.js"));
  return studentCode;
});

test("display the sea (remember that array keys start at 0 😉)", () => {
  return studentCode.then((code) => {
    const output = [];
    let _consolelog = console.log;
    console.log = (thing) => output.push(thing);

    eval(code);

    console.log = _consolelog;

    expect(output).toEqual([
      "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
      "~~~~~~~~~~~~~~~~~~~~~~~~X~~~~~",
      "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
      "~~~~~0~~~~~~~~~~~~~~~~~~~~~~~~",
      "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
      "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
      "~~~~~~~~~~~~~~~~~0~~~~~~~~~~~~",
      "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
      "~~~~~~X~~~~~~~~~~~~~~~~~~~~~~~",
    ]);
  });
});
