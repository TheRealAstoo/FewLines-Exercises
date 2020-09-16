const car = require("../src/car");

describe("Chaining", () => {
  let fakeLog;
  beforeEach(() => {
    fakeLog = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    fakeLog.mockRestore();
  });

  describe("#start", () => {
    it("Should be a function", () => {
      expect(typeof car.start).toBe("function");
    });

    it("Should return the car", () => {
      expect(car.start()).toEqual(car);
    });
  });

  describe("#changeSpeed", () => {
    it("Should be a function", () => {
      expect(typeof car.changeSpeed).toBe("function");
    });

    it("Should return the car", () => {
      expect(car.changeSpeed(0)).toEqual(car);
    });
  });

  describe("#drive", () => {
    it("Should be a function", () => {
      expect(typeof car.drive).toBe("function");
    });

    it("Should return the car", () => {
      expect(car.drive(0)).toEqual(car);
    });
  });

  describe("#showDistance", () => {
    it("Should be a function", () => {
      expect(typeof car.showDistance).toBe("function");
    });

    it("Should return the car", () => {
      expect(car.showDistance()).toEqual(car);
    });
  });

  describe("Using the car", () => {
    it("Should display distance when we don't change the speed", () => {
      logger = jest.fn();
      console.log = logger;

      car.start().changeSpeed(130).drive(45).showDistance();

      expect(logger).toHaveBeenCalledWith("97.5 Km");
    });

    it("Should display the correct distance when we change the speed", () => {
      logger = jest.fn();
      console.log = logger;

      car.start().changeSpeed(130).drive(45).changeSpeed(50).drive(30).changeSpeed(90).drive(80).showDistance();

      expect(logger).toHaveBeenCalledWith("242.5 Km");
    });

    it("Should be able to restart a car", () => {
      logger = jest.fn();
      console.log = logger;

      car.start().changeSpeed(130).drive(45).changeSpeed(50).drive(30).start().changeSpeed(90).drive(80).showDistance();

      expect(logger).toHaveBeenCalledWith("120 Km");
    });
  });
});
