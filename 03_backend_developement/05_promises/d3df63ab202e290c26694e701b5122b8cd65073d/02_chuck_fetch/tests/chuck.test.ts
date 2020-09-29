jest.mock("node-fetch", () => require("fetch-mock-jest").sandbox());
const fetch = require("node-fetch");
import { getCategories, getChuckNorrisJoke } from "../src/chuck";

describe("Promisified Chuck", () => {
  afterEach(() => fetch.reset());

  describe("#getCategories", () => {
    it("Must use fetch", () => {
      expect.assertions(1);

      fetch.once(/\w*/, {});
      getCategories();
      expect(fetch.called()).toBe(true);
    });

    it("Must return an array of categories", () => {
      expect.assertions(1);

      const fnReturn = ["dev"];
      fetch.once(/\w*/, fnReturn);
      getCategories().then((res) => expect(res).toEqual(fnReturn));
    });
  });

  describe("#getChuckNorrisJoke", () => {
    it("Must take one parameter", () => {
      expect.assertions(1);

      expect(getChuckNorrisJoke.length).toBe(1);
    });

    it("Must use fetch", () => {
      expect.assertions(1);
      const category = "dev";

      fetch.once(/\w*/, {});
      getChuckNorrisJoke(category);
      expect(fetch.called()).toBe(true);
    });

    it("Must use the category parameter in the url", () => {
      expect.assertions(2);
      const category = "dev";
      const fnReturn = {
        value:
          "They say curiosity killed the cat. This is false. Chuck Norris killed the cat. Every single one of them.",
      };

      fetch.once(/.*=\w*/, fnReturn);
      getChuckNorrisJoke(category).then((res) => expect(res).toEqual(fnReturn.value));
      expect(fetch.calls()[0][0]).toBe("https://api.chucknorris.io/jokes/random?category=dev");
    });

    it("Must return a string", () => {
      expect.assertions(1);
      const category = "dev";
      const fnReturn = {
        value:
          "They say curiosity killed the cat. This is false. Chuck Norris killed the cat. Every single one of them.",
      };

      fetch.once(/.*=\w*/, fnReturn);
      getChuckNorrisJoke(category).then((res) => expect(res).toEqual(fnReturn.value));
    });
  });
});
