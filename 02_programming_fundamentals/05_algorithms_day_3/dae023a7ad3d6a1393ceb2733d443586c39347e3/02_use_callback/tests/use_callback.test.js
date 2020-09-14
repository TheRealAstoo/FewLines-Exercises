const { readCode, findNode } = require("camp2-helpers");
const getInput = require("../src/getInput");

describe("#getInput", () => {
  it("Should be a function", () => {
    expect(typeof getInput).toBe("function");
  });

  it("Should take two parameters", () => {
    expect(getInput.length).toBe(2);
  });

  it("Should use the callback function", () => {
    const fakeConsoleLog = jest.spyOn(console, "log").mockImplementation(() => {});
    getInput({ user: "Toto", key: "A" }, (text) => console.log(text));
    expect(fakeConsoleLog).toHaveBeenCalledWith("A");
    fakeConsoleLog.mockRestore();
  });
});
