const person = require("../src/person");

describe("#introduceMyself", () => {
  it("Should exist in the person's properties", () => {
    expect(Object.keys(person)).toContain("introduceMyself");
  });

  it("Should be a function", () => {
    expect(typeof person.introduceMyself).toBe("function");
  });

  it("Should return the right string", () => {
    const introduction = person.introduceMyself();
    expect(typeof introduction).toBe("string");
    expect(introduction).toBe("Hello! I'm Abdel Sadki and I'm 42.");
  });
});
