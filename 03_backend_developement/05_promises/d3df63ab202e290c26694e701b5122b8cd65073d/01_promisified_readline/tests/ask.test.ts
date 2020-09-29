jest.mock("fwl-readline", () => {
  return {
    createInterface: () => {
      return {
        question: () => {},
        close: () => {},
      };
    },
  };
});

import ask from "../src/ask";

const mockedReader = (input: string) => {
  return {
    question: (question: string, callback: Function) => {
      callback(input);
    },
    close: () => {},
  };
};

describe("#ask", () => {
  it("Must return a promise", () => {
    expect.assertions(2);

    const promise = ask("any question", mockedReader("user input"));
    expect(typeof promise.then).toBe("function");
    expect(typeof promise.catch).toBe("function");
  });

  it(`Must resolve the user input if !== ""`, async () => {
    expect.assertions(1);

    const input = await ask("any question", mockedReader("user input"));
    expect(input).toBe("user input");
  });

  it(`Must reject the user input if === ""`, () => {
    expect.assertions(1);

    ask("any question", mockedReader(""))
      .then(() => {})
      .catch((e) => {
        expect(e.message).toBe("Invalid input");
      });
  });
});
