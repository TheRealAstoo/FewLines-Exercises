/* global beforeAll test expect */
const fs = require("fs");
const path = require("path");
const readcode = require("./readcode");

let studentCode;
beforeAll(() => {
  // Loads the student's code
  studentCode = readcode(
    path.resolve(__dirname, "../src/04_inverted_right_triangle.js")
  );
  return studentCode;
});

test("display an inverted right triangle", () => {
  return studentCode.then((code) => {
    const output = [];
    let _consolelog = console.log;
    console.log = (thing) => output.push(thing);

    eval(code);

    console.log = _consolelog;

    expect(output).toEqual(["*****", " ****", "  ***", "   **", "    *"]);
  });
});
