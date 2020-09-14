const { readCode, findNode, expectMessage } = require("camp2-helpers");
const { recursiveBouncer, arrayCrusher } = require("../src/arraysDestructureSpread");
const { isObject } = require("util");

describe("Destructuring and spread with Arrays", () => {
  describe("#arrayCrusher", () => {
    it("Should concatenate two array in one", () => {
      const crushedArray1 = arrayCrusher([1], [2]);
      const crushedArray2 = arrayCrusher([1, 2], [3, 4]);

      expect(crushedArray1).toEqual([1, 2]);
      expect(crushedArray2).toEqual([1, 2, 3, 4]);
    });

    it("Should use array destructuring", async () => {
      expect.assertions(1);
      const code = await readCode("./src/arraysDestructureSpread.js");
      const match = code.match(/arrayCrusher\(\w*\, \w*\) {(?<body>.*)^}$.*function/ms);

      if (match && match.groups && match.groups.body) {
        expectMessage(match.groups.body, "Use array destructuring method '...'", "log").toMatch(
          /\[\.{3}\w*,\s?\.{3}\w*\];/,
        );
      }
    });
  });

  describe("#recursiveBouncer", () => {
    let fakeConsoleLog;

    beforeEach(() => {
      fakeConsoleLog = jest.spyOn(console, "log").mockImplementation(() => {});
    });

    afterEach(() => {
      fakeConsoleLog.mockRestore();
    });

    it("Should print each element of the array once with 'console.log'", () => {
      [
        [1, 2, 3],
        ["Hello", "World"],
        ["a", "b", "c"],
      ].forEach((a) => {
        fakeConsoleLog = jest.spyOn(console, "log").mockImplementation(() => {});
        recursiveBouncer(a);
        expect(a).toEqual(fakeConsoleLog.mock.calls.flat());
        expect(fakeConsoleLog).toHaveBeenCalledTimes(a.length);
        fakeConsoleLog.mockRestore();
      });
    });

    it("Should use array destructuring", async () => {
      expect.assertions(1);
      const code = await readCode("./src/arraysDestructureSpread.js");

      const match = code.match(/recursiveBouncer\(\w*\) {(?<body>.*)^}$/ms);
      if (match && match.groups && match.groups.body) {
        expectMessage(match.groups.body, "Use array destructuring method '...'", "log").toMatch(
          /\[\w*, \.{3}\w*\] = \w*/,
        );
      }
    });

    it("Should use recursion", async () => {
      expect.assertions(4);
      const code = await readCode("./src/arraysDestructureSpread.js");
      const match = code.match(/recursiveBouncer\(\w*\) {(?<body>.*)^}$/ms);
      if (match && match.groups && match.groups.body) {
        expect(match.groups.body).not.toMatch("for");
        expect(match.groups.body).not.toMatch("while");
        expect(match.groups.body).not.toMatch("forEach");
        expect(match.groups.body).toMatch("recursiveBouncer");
      }
    });
  });
});
