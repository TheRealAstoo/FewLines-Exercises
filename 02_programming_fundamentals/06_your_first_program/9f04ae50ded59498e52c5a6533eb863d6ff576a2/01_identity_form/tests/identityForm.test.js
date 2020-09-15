const identityForm = require("../src/identityForm");
const readline = require("readline");

const readerMockFactory = (mocks) => {
  const question = jest.fn();
  mocks.forEach((m) => question.mockImplementationOnce(m));
  readline.createInterface = jest.fn().mockReturnValue({
    close: jest.fn().mockImplementationOnce(() => undefined),
    question,
  });
  return readline.createInterface();
};
const firstName = "Gandalf";
const firstNameMock = (_question, callback) => callback(firstName);
const lastName = "The Grey";
const lastNameMock = (_question, callback) => callback(lastName);
const age = "very very old";
const ageMock = (_question, callback) => callback(age);

describe("Identity form", () => {
  let fakeLog;

  beforeEach(() => {
    fakeLog = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    fakeLog.mockRestore();
  });

  it("Should ask the user for its first name", () => {
    expect.assertions(1);

    const reader = readerMockFactory([
      (askFirstName, callback) => {
        expect(askFirstName).toMatch("first name");
        callback(firstName);
      },
    ]);

    identityForm(reader);
  });

  it("Should ask the user for its last name", () => {
    expect.assertions(1);

    const reader = readerMockFactory([
      firstNameMock,
      (askLastName, callback) => {
        expect(askLastName).toMatch("last name");
        callback(lastName);
      },
    ]);

    identityForm(reader);
  });

  it("Should ask the user for its age", () => {
    expect.assertions(1);

    const reader = readerMockFactory([
      firstNameMock,
      lastNameMock,
      (askAge, callback) => {
        expect(askAge).toMatch("age");
        callback(age);
      },
    ]);

    identityForm(reader);
  });

  test("Computes the right sentence", () => {
    const reader = readerMockFactory([firstNameMock, lastNameMock, ageMock]);

    identityForm(reader);
    expect(fakeLog).toBeCalledWith(`Your name is ${firstName} ${lastName} and you are ${age}.`);
  });
});
