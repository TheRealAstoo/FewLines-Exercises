const readline = require("readline");

const numberGame = require("../src/numberGameWithStats");

const readerMockFactory = (mocks) => {
  const question = jest.fn();
  mocks.forEach((m) => question.mockImplementationOnce(m));
  readline.createInterface = jest.fn().mockReturnValue({
    close: jest.fn().mockImplementationOnce(() => undefined),
    question,
  });
  return readline.createInterface();
};

describe("Number Game with stats", () => {
  let fakeLog;
  beforeEach(() => {
    fakeLog = jest.spyOn(console, "log").mockImplementation(() => {});
    Math.random = jest.fn().mockReturnValue(0.01);
  });

  afterEach(() => {
    Math.random.mockRestore();
    fakeLog.mockRestore();
  });

  it("Should handle 'too low' numbers", () => {
    expect.assertions(1);
    const reader = readerMockFactory([
      (_question, callback) => callback(1),
      (question, _callback) => {
        expect(question.toLowerCase()).toMatch("too low");
      },
    ]);

    numberGame(reader);
  });

  it("Should handle 'too high' numbers", () => {
    expect.assertions(1);
    const reader = readerMockFactory([
      (_question, callback) => callback(3),
      (question, _callback) => {
        expect(question.toLowerCase()).toMatch("too high");
      },
    ]);

    numberGame(reader);
  });

  it("Should handle 'out of range' numbers", () => {
    expect.assertions(2);
    const reader = readerMockFactory([
      (_question, callback) => callback(0),
      (question, callback) => {
        expect(question.toLowerCase()).toMatch("number is between");
        callback(4);
      },
      (question, _callback) => {
        expect(question.toLowerCase()).toMatch("number is between");
      },
    ]);

    numberGame(reader, 1, 3);
  });

  it("Should handle the good number", () => {
    let logs = "";
    fakeLog = jest.spyOn(console, "log").mockImplementation((message) => {
      logs += message;
    });
    const reader = readerMockFactory([(_question, callback) => callback(2)]);
    numberGame(reader);
    expect(logs).toMatch(/won/i);
    fakeLog.mockRestore();
  });

  it("Should print the number of attempts the user made to win", () => {
    let logs = "";
    fakeLog = jest.spyOn(console, "log").mockImplementation((message) => {
      logs += message;
    });
    const reader = readerMockFactory([(_question, callback) => callback(1), (_question, callback) => callback(2)]);

    numberGame(reader);
    expect(logs).toMatch("2");
    fakeLog.mockRestore();
  });
});
