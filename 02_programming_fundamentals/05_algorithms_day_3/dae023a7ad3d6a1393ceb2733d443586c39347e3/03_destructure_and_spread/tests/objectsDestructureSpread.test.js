const { readCode, findNode } = require("camp2-helpers");
const { getConfig, logInfos } = require("../src/objectsDestructureSpread");
const { isObject } = require("util");

describe("Destructuring and spread with objects", () => {
  describe("#getConfig", () => {
    it("Should take an optional object parameter", async () => {
      const code = await readCode("./src/objectsDestructureSpread.js");
      const ast = findNode(code, "getConfig");
      const isParameterOptional = ast.params[0].type === "AssignmentPattern";

      expect(isParameterOptional).toBe(true);
    });

    it("Should return an object", () => {
      const config = getConfig({});
      expect(isObject(config)).toBe(true);
    });

    it("Should return the overriden configuration", () => {
      const userConfig = {
        user: {
          name: "John",
          password: "123123",
          admin: true,
        },
        hardware: {
          CPUThreads: 2,
        },
      };
      const config = getConfig(userConfig);
      expect(config).toEqual({
        user: { name: "John", password: "123123", admin: true },
        hardware: { CPUThreads: 2, memory: 2, diskSpace: 20 },
      });
    });

    it("Should not use any conditional statement", async () => {
      const userConfig = {
        user: {
          name: "John",
          password: "123123",
          admin: true,
        },
        hardware: {
          CPUThreads: 2,
        },
      };
      const config = getConfig(userConfig);
      expect(config).toEqual({
        user: { name: "John", password: "123123", admin: true },
        hardware: { CPUThreads: 2, memory: 2, diskSpace: 20 },
      });

      const code = await readCode("./src/objectsDestructureSpread.js");
      const ifStatement = code.match(/if/);
      const ternaryStatement = code.match(/\?/);

      expect(ifStatement).toBe(null);
      expect(ternaryStatement).toBe(null);
    });
  });

  describe("#logInfos", () => {
    let fakeConsoleLog;

    beforeEach(() => {
      fakeConsoleLog = jest.spyOn(console, "log").mockImplementation(() => {});
    });

    afterEach(() => {
      fakeConsoleLog.mockRestore();
    });

    it("Should not crash when called with no user", () => {
      let error;
      try {
        logInfos();
      } catch (e) {
        error = e;
      }
      expect(error).toBe(undefined);
    });

    it("Should complete with '<REDACTED>' for missing infos", () => {
      const possibleResults = [
        {
          user: { firstName: "Toto", address: { city: "Lille", country: "France" } },
          match: "Toto <REDACTED> lives in Lille, France.",
        },
        {
          user: { lastName: "Toto", address: { city: "Lille", country: "France" } },
          match: "<REDACTED> Toto lives in Lille, France.",
        },
        {
          user: { lastName: "Toto", address: { city: "Lille" } },
          match: "<REDACTED> Toto lives in Lille, <REDACTED>.",
        },
        {
          user: { lastName: "Toto" },
          match: "<REDACTED> Toto lives in <REDACTED>, <REDACTED>.",
        },
        {
          user: { address: { country: "France" } },
          match: "<REDACTED> <REDACTED> lives in <REDACTED>, France.",
        },
        {
          user: {},
          match: "<REDACTED> <REDACTED> lives in <REDACTED>, <REDACTED>.",
        },
      ];

      expect.assertions(possibleResults.length);

      possibleResults.forEach((r) => {
        fakeConsoleLog = jest.spyOn(console, "log").mockImplementation(() => {});
        logInfos(r.user);
        expect(fakeConsoleLog).toBeCalledWith(r.match);
        fakeConsoleLog.mockRestore();
      });
    });

    it("Should not use any conditional statement", async () => {
      const user = { address: { country: "France" } };
      logInfos(user);
      expect(fakeConsoleLog).toHaveBeenCalledWith("<REDACTED> <REDACTED> lives in <REDACTED>, France.");

      const code = await readCode("./src/objectsDestructureSpread.js");
      const ifStatement = code.match(/if/);
      const ternaryStatement = code.match(/\?.*:/);

      expect(ifStatement).toBe(null);
      expect(ternaryStatement).toBe(null);
    });
  });
});
