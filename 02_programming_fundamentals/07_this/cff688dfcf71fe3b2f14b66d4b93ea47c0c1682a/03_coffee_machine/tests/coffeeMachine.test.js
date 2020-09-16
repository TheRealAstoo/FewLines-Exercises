const machine = require("../src/coffeeMachine");

describe("Coffee Machine", () => {
  beforeEach(() => {
    machine.litersOfCoffee = 0;
  });

  describe("#expresso", () => {
    it("Should be able to serve expressos", () => {
      machine.litersOfCoffee = 0.16;
      expect(machine.expresso()).toEqual(true);
      expect(machine.expresso()).toEqual(true);
      expect(machine.expresso()).toEqual(false);
    });

    it("Should consume the right amount of coffee for an expresso", () => {
      machine.litersOfCoffee = 0.08;
      expect(machine.expresso()).toEqual(true);
      expect(machine.expresso()).toEqual(false);
      expect(machine.litersOfCoffee).toEqual(0);
    });
  });

  describe("#longCoffee", () => {
    it("Should be able to serve long coffees", () => {
      machine.litersOfCoffee = 0.3;
      expect(machine.longCoffee()).toEqual(true);
      expect(machine.longCoffee()).toEqual(true);
      expect(machine.longCoffee()).toEqual(false);
    });

    it("Should consume the right amount of coffee for a long coffee", () => {
      machine.litersOfCoffee = 0.15;
      expect(machine.longCoffee()).toEqual(true);
      expect(machine.longCoffee()).toEqual(false);
      expect(machine.litersOfCoffee).toEqual(0);
    });
  });

  describe("#fillWithLitersOfCoffee", () => {
    it("Should be able to fill the machine", () => {
      machine.fillWithLitersOfCoffee(5);

      expect(machine.litersOfCoffee).toEqual(5);
    });

    it("Should be able to re-fill the machine", () => {
      machine.litersOfCoffee = 2;
      machine.fillWithLitersOfCoffee(5);

      expect(machine.litersOfCoffee).toEqual(7);
    });
  });
});
