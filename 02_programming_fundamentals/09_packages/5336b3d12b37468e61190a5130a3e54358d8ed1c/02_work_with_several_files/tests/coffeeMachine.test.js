import * as container from "../src/container.js";
import * as machine from "../src/machine.js";
import * as drinks from "../src/drinks.js";

describe("Work with several files", () => {
  describe("container.js", () => {
    describe("#putLitersOfCoffee", () => {
      it("Should be exported", () => {
        expect(container.putLitersOfCoffee).not.toBe(undefined);
        expect(typeof container.putLitersOfCoffee).toBe("function");
      });

      it("Should take the coffee quantity as a parameter", () => {
        expect(container.putLitersOfCoffee.length).toBe(1);
      });
    });

    describe("#consumeLitersOfCoffee", () => {
      it("Should be exported", () => {
        expect(container.consumeLitersOfCoffee).not.toBe(undefined);
        expect(typeof container.consumeLitersOfCoffee).toBe("function");
      });

      it("Should take the coffee quantity as a parameter", () => {
        expect(container.consumeLitersOfCoffee.length).toBe(1);
      });
    });
  });

  describe("drinks.js", () => {
    describe("#longCoffee", () => {
      it("Should be exported", () => {
        expect(drinks.longCoffee).not.toBe(undefined);
        expect(typeof drinks.longCoffee).toBe("function");
      });

      it("Should take one parameter", () => {
        expect(drinks.longCoffee.length).toBe(1);
      });
    });

    describe("#expresso", () => {
      it("Should be exported", () => {
        expect(drinks.expresso).not.toBe(undefined);
        expect(typeof drinks.expresso).toBe("function");
      });

      it("Should take a container as a parameter", () => {
        expect(drinks.expresso.length).toBe(1);
      });
    });
  });

  describe("machine.js", () => {
    describe("#fillWithLitersOfCoffee", () => {
      it("Should be exported", () => {
        expect(machine.fillWithLitersOfCoffee).not.toBe(undefined);
        expect(typeof machine.fillWithLitersOfCoffee).toBe("function");
      });

      it("Should take a container as a parameter", () => {
        expect(machine.fillWithLitersOfCoffee.length).toBe(1);
      });
    });

    describe("#expresso", () => {
      it("Should be exported", () => {
        expect(machine.expresso).not.toBe(undefined);
        expect(typeof machine.expresso).toBe("function");
      });

      it("Should take no parameter", () => {
        expect(machine.expresso.length).toBe(0);
      });
    });

    describe("#longCoffee", () => {
      it("Should be exported", () => {
        expect(machine.longCoffee).not.toBe(undefined);
        expect(typeof machine.longCoffee).toBe("function");
      });

      it("Should take no parameter", () => {
        expect(machine.longCoffee.length).toBe(0);
      });
    });
  });

  describe("Coffee Machine", () => {
    it("Should serve coffees while it is possible!!", () => {
      machine.fillWithLitersOfCoffee(0.5);
      expect(machine.expresso()).toBe(true);
      expect(machine.longCoffee()).toBe(true);
      expect(machine.longCoffee()).toBe(true);
      expect(machine.longCoffee()).toBe(false);
      expect(machine.expresso()).toBe(true);
      expect(machine.expresso()).toBe(false);
    });
  });
});
