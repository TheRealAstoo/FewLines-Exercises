import { CONTINENTS, CITIES } from "../src/data/data";
import { isEnum } from "./utils/isEnum";
import { isObjectKeysFromEnum } from "./utils/isObjectKeysFromEnum";
import { sanitizeUserInput } from "../src/utils/format";

describe("data", () => {
  describe("CONTINENTS", () => {
    it("should be an enum", () => {
      expect(isEnum(CONTINENTS)).toEqual(true);
    });

    it("should have six continents", () => {
      // Object.keys(enum) returns twice the size of the object in case of enum.
      expect(Object.keys(CONTINENTS).length / 2).toEqual(6);
    });
  });

  describe("CITIES", () => {
    it("be an object", () => {
      expect(CITIES instanceof Object).toEqual(true);
    });

    it("should have the same keys as the CONTINENT enum", () => {
      expect(isObjectKeysFromEnum(CITIES, CONTINENTS)).toEqual(true);
    });
  });
});

describe("sanitizeUserInput", () => {
  it("should sentence case each word and join them", () => {
    expect(sanitizeUserInput("South America")).toEqual("SouthAmerica");
  });

  it("should remove string symbols and unnecessary spaces", () => {
    expect(sanitizeUserInput("_Europe/-.")).toEqual("Europe");
  });
});
