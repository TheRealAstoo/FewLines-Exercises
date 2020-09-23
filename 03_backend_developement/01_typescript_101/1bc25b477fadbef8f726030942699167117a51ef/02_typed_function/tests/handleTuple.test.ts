// @ts-nocheck
import { handleTuple } from "../src/index";

describe("handleTuple", () => {
  
  describe("should only accept tuples as props", () => {
    it("shouldn't use console.log if not provided with a tuple", () => {
      const spy = jest.spyOn(console, "log").mockImplementation(() => {});
      handleTuple([[], {}]);
      handleTuple([true, () => {}]);
      expect(spy).not.toHaveBeenCalled();
      spy.mockRestore()
    });
  });

  describe("should output:", () => {
    test("two console.log with correct values and types", () => {
      let logs = ""
      const spy = jest.spyOn(console, "log").mockImplementation((text) => {
        logs += text
      });
      handleTuple(["foo", 1]);

      expect(logs).toMatch(/foo.*string/)
      expect(logs).toMatch(/1.*number/)
      expect(spy).toHaveBeenCalledTimes(2);
      spy.mockRestore()
    });

    test("the value of the first item at the start of the string", () => {
      const spy = jest.spyOn(console, "log").mockImplementation(() => {});
      handleTuple(["foo", 1]);
      expect(spy.mock.calls[0][0]).toEqual(
        expect.stringMatching(/^foo(.*?)/)
      );
      spy.mockRestore()
    });

    test("the value of the second item at the start of the string", () => {
      const spy = jest.spyOn(console, "log").mockImplementation(() => {});
      handleTuple(["foo", 1]);
      expect(spy.mock.calls[1][0]).toEqual(
        expect.stringMatching(/^1(.*?)/)
      );
      spy.mockRestore()
    });
  });
});
