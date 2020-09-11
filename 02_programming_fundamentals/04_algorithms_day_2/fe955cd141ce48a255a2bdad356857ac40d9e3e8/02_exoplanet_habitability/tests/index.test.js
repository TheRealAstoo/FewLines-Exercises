const planets = require("./exoplanetsData");
const canHabitateLife = require("../src/index");

describe("#canHabitateLife", () => {
  it("should not return 'undefined'", () => {
    const planet = planets.planetB;
    const star = { spectralClass: "M" };

    const result = canHabitateLife(star, planet);

    expect(result).toBeDefined();
  });

  it("should return a Boolean", () => {
    const planet = planets.planetB;
    const star = { spectralClass: "M" };

    const result = canHabitateLife(star, planet);

    expect(typeof result).toBe("boolean");
  });

  it("should return false for stars with spectral class O, B, A, F, G. ", () => {
    const planet = {
      mass: 1,
      radius: 1,
      rotationStability: true,
      habitalZone: true,
    };
    const stars = [
      { spectralClass: "A" },
      { spectralClass: "B" },
      { spectralClass: "F" },
      { spectralClass: "G" },
      { spectralClass: "O" },
    ];

    return stars.forEach((star) => {
      const result = canHabitateLife(star, planet);
      expect(result).toBe(false);
    });
  });

  it("should return true for suitable planets and stars with spectral class K, M. ", () => {
    const planet = {
      mass: 1,
      radius: 1,
      rotationStability: true,
      habitalZone: true,
    };
    const stars = [{ spectralClass: "K" }, { spectralClass: "M" }];

    return stars.forEach((star) => {
      const result = canHabitateLife(star, planet);
      expect(result).toBe(true);
    });
  });
});

describe("Planets' criteria with star of spectral classes K and M", () => {
  it("should return true for an Earth like planet", () => {
    const planet = {
      mass: 1,
      radius: 1,
      rotationStability: true,
      habitalZone: true,
    };
    const star = { spectralClass: "M" };

    const result = canHabitateLife(star, planet);

    expect(result).toBe(true);
  });

  it("should return false a planet outside an habitable zone", () => {
    const planet = {
      mass: 1,
      radius: 1,
      rotationStability: true,
      habitalZone: false,
    };
    const star = { spectralClass: "M" };

    const result = canHabitateLife(star, planet);

    expect(result).toBe(false);
  });

  it("should return false for a planet without a stable rotation", () => {
    const planet = {
      mass: 1,
      radius: 1,
      rotationStability: false,
      habitalZone: true,
    };
    const star = { spectralClass: "M" };

    const result = canHabitateLife(star, planet);

    expect(result).toBe(false);
  });

  it("should return false for a planet with a radius <= 0.5", () => {
    const planet = {
      mass: 1,
      radius: 0.4,
      rotationStability: true,
      habitalZone: true,
    };
    const star = { spectralClass: "M" };

    const result = canHabitateLife(star, planet);

    expect(result).toBe(false);
  });

  it("should return false for a planet with a radius >= 2.5", () => {
    const planet = {
      mass: 1,
      radius: 2.6,
      rotationStability: true,
      habitalZone: true,
    };
    const star = { spectralClass: "M" };

    const result = canHabitateLife(star, planet);

    expect(result).toBe(false);
  });

  it("should return false for a planet with a mass >= 3", () => {
    const planet = {
      mass: 3.01,
      radius: 0.4,
      rotationStability: true,
      habitalZone: true,
    };
    const star = { spectralClass: "M" };

    const result = canHabitateLife(star, planet);

    expect(result).toBe(false);
  });

  it("should return false for a planet with a mass < 0.5 and a radius < 1", () => {
    const planet = {
      mass: 0.4,
      radius: 0.6,
      rotationStability: true,
      habitalZone: true,
    };
    const star = { spectralClass: "M" };

    const result = canHabitateLife(star, planet);

    expect(result).toBe(false);
  });

  it("should return true for a planet with a mass < 0.5 and a radius > 1", () => {
    const planet = {
      mass: 0.4,
      radius: 1.5,
      rotationStability: true,
      habitalZone: true,
    };
    const star = { spectralClass: "M" };

    const result = canHabitateLife(star, planet);

    expect(result).toBe(true);
  });
});
