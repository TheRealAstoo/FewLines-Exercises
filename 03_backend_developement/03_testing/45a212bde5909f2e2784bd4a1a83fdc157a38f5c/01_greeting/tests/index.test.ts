import greet from "../src/index"

describe("Greets the user", () => {
  test("Greet the user if given a name", () => {
    expect.assertions(1);
    
    const result = greet("John")

    expect(result).toBe("Hello JOHN!")
  });

  test("Greet the world if not given a name", () => {
    expect.assertions(1);

    const result = greet()

    expect(result).toBe("Hello WORLD!")
  });
})
