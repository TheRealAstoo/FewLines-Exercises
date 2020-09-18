import * as dateFunctions from "../src/playWithTime";
import * as helpers from "camp2-helpers";

describe("Play With Time", () => {
  if (Object.keys(dateFunctions).length > 0) {
    it("Shouldn't use JavaScript 'Date' in any function", async () => {
      expect.assertions(1);

      const code = await helpers.default.readCode("./src/playWithTime.js");
      expect(code).not.toMatch("new Date");
    });
  }
  describe("#formatDate", () => {
    it("Should be present in the export", () => {
      expect(typeof dateFunctions.formatDate).toBe("function");
      expect(typeof dateFunctions.formatDate).not.toBe("undefined");
    });
    it("Take a date parameter", () => {
      expect(dateFunctions.formatDate.length).toBe(1);
    });
    it("Should return the right format for '05-03-2019'", () => {
      const date = dateFunctions.formatDate("1939-01-05");
      expect(date).toBe("Thursday 5th January 1939");
    });
  });

  describe("#yearsSinceDate", () => {
    it("Should be present in the export", () => {
      expect(typeof dateFunctions.yearsSinceDate).toBe("function");
      expect(typeof dateFunctions.yearsSinceDate).not.toBe("undefined");
    });

    it("Should take a date parameter", () => {
      expect(dateFunctions.yearsSinceDate.length).toBe(1);
    });

    it("Should return the right number of years since the given date", () => {
      const count = dateFunctions.yearsSinceDate("1939-01-05");
      const actualYear = new Date().getFullYear();
      expect(count).toBe(actualYear - 1939);
    });
  });

  describe("#daysSinceDate", () => {
    it("Should be present in the export", () => {
      expect(typeof dateFunctions.daysSinceDate).toBe("function");
      expect(typeof dateFunctions.daysSinceDate).not.toBe("undefined");
    });

    it("Should take a date parameter", () => {
      expect(dateFunctions.daysSinceDate.length).toBe(1);
    });

    it("Should return the right number of days since the given date", () => {
      const count = dateFunctions.daysSinceDate("1939-01-05");
      const days = Math.round((new Date() - new Date("01-05-1939")) / (1000 * 60 * 60 * 24));
      expect(count).toBe(days);
    });
  });

  describe("#getDayFromDate", () => {
    it("Should be present in the export", () => {
      expect(typeof dateFunctions.getDayFromDate).toBe("function");
      expect(typeof dateFunctions.getDayFromDate).not.toBe("undefined");
    });

    it("Should take a date parameter", () => {
      expect(dateFunctions.getDayFromDate.length).toBe(1);
    });

    it("Should return the right week day of the given date", () => {
      const day = dateFunctions.getDayFromDate("1939-01-05");
      expect(day).toBe("Thursday");
    });
  });
});
