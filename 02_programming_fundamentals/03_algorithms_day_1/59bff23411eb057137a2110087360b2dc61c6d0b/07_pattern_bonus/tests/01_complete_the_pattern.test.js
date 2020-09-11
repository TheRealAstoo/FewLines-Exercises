/* global beforeAll test expect */
const fs = require("fs");
const path = require("path");
const readcode = require("./readcode");

let studentCode;
beforeAll(() => {
  // Loads the student's code
  studentCode = readcode(
    path.resolve(__dirname, "../src/01_complete_the_pattern.js")
  );
  return studentCode;
});

test("should work with the default example", () => {
  return studentCode.then((code) => {
    const output = [];
    let _consolelog = console.log;
    console.log = (thing) => output.push(thing);

    eval(code);

    console.log = _consolelog;
    expect(output.join("\n")).toEqual("54321\n5432\n543\n54\n5");
  });
});

test("should work when changing numberOfLine", () => {
  return studentCode.then((code) => {
    const output = [];
    let _consolelog = console.log;
    console.log = (thing) => output.push(thing);

    eval(code.replace("const numberOfLine = 5;", "const numberOfLine = 1;"));

    console.log = _consolelog;
    expect(output).toEqual(["1"]);
  });
});
