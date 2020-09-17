const { createHumans, humanFactory } = require("../src/humanFactory");

const al = {
  firstName: "Albert",
  lastName: "Einstein",
  quote: "If you can't explain it to a six year old, you don't understand it yourself.",
  job: "Theoretical Physicist",
};

const sigourney = {
  firstName: "Sigourney",
  lastName: "Weaver",
  job: "Actress",
  genre: "female",
  introduction: function () {
    return `Hi! I'm Sig and I played in Alien!`;
  },
  fullname: function () {
    return `Helen Ripley`;
  },
};

describe("Human factory", () => {
  describe("#humanFactory", () => {
    it("Should create a John Doe when no given data", () => {
      const john = humanFactory();
      expect(john.lastName).toBe("Doe");
      expect(john.firstName).toBe("John");
      expect(john.genre).toBe("male");
      expect(john.job).toBe("unemployed");
      expect(john.fullname()).toBe("John Doe");
      expect(john.introduction()).toBe("Hello! My name is John Doe.");
    });

    it("Should create a Jane Doe when only a female genre is given", () => {
      const jane = humanFactory({ genre: "female" });
      expect(jane.lastName).toBe("Doe");
      expect(jane.firstName).toBe("Jane");
      expect(jane.genre).toBe("female");
      expect(jane.job).toBe("unemployed");
      expect(jane.fullname()).toBe("Jane Doe");
      expect(jane.introduction()).toBe("Hello! My name is Jane Doe.");
    });

    it("Should override any previous property", () => {
      const sig = humanFactory(sigourney);
      expect(sig.lastName).toBe("Weaver");
      expect(sig.firstName).toBe("Sigourney");
      expect(sig.genre).toBe("female");
      expect(sig.job).toBe("Actress");
      expect(sig.fullname()).toBe("Helen Ripley");
      expect(sig.introduction()).toBe("Hi! I'm Sig and I played in Alien!");
    });

    it("Should add new properties", () => {
      const john = humanFactory({ age: 20 });
      expect(john.age).toBe(20);
    });
  });

  describe("#createHumans", () => {
    it("Should create one human per object", () => {
      const [john, jane] = createHumans([{}, { genre: "female" }]);
      expect(john.lastName).toBe("Doe");
      expect(john.firstName).toBe("John");
      expect(john.genre).toBe("male");
      expect(john.job).toBe("unemployed");
      expect(john.fullname()).toBe("John Doe");
      expect(john.introduction()).toBe("Hello! My name is John Doe.");
      expect(jane.lastName).toBe("Doe");
      expect(jane.firstName).toBe("Jane");
      expect(jane.genre).toBe("female");
      expect(jane.job).toBe("unemployed");
      expect(jane.fullname()).toBe("Jane Doe");
      expect(jane.introduction()).toBe("Hello! My name is Jane Doe.");
    });
  });
});
