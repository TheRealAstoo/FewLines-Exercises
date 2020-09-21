const readline = require("readline");
const fs = require("fs");

const readerMockFactory = (mocks) => {
  const question = jest.fn();
  mocks.forEach((m) => question.mockImplementationOnce(m));
  readline.createInterface = jest.fn().mockReturnValue({
    close: jest.fn().mockImplementationOnce(() => undefined),
    question,
  });
  return readline.createInterface();
};

describe("Refactor Tic Tac Toe", () => {
  describe("Game state", () => {
    test("the file exists", () => {
      expect(fs.existsSync("./src/gameState.js")).toBe(true);
    });

    it("Should export the game 'state'", () => {
      const gameState = require("../src/gameState");
      expect(gameState.state).toBeInstanceOf(Object);
      expect(gameState.state).toEqual({
        a: [null, null, null],
        b: [null, null, null],
        c: [null, null, null],
      });
    });

    describe("#updateState", () => {
      it("Should export the 'updateState' function", () => {
        const gameState = require("../src/gameState");
        expect(gameState.updateState).toBeInstanceOf(Function);
      });

      it("Should take a 'coordinate' and a 'player' parameters", () => {
        const gameState = require("../src/gameState");
        expect(gameState.updateState.length).toBe(2);
      });

      it("Should update the state", () => {
        const gameState = require("../src/gameState");
        const { state } = require("../src/gameState");
        gameState.updateState({ letter: "a", digit: 0 }, "X");
        expect(state).toEqual({
          a: ["X", null, null],
          b: [null, null, null],
          c: [null, null, null],
        });
      });
    });
  });

  describe("Game display", () => {
    test("the file exists", () => {
      expect(fs.existsSync("./src/display.js")).toBe(true);
    });

    describe("#renderBoard", () => {
      it("Should export the 'renderBoard' function", () => {
        const display = require("../src/display");
        expect(display.renderBoard).toBeInstanceOf(Function);
      });

      it("Should take the state as parameter", () => {
        const display = require("../src/display");
        expect(display.renderBoard.length).toBe(1);
      });

      it("Should render the board", () => {
        const state = {
          a: [null, null, null],
          b: [null, null, null],
          c: [null, null, null],
        };
        const display = require("../src/display");
        expect(display.renderBoard(state)).toMatch("  1   2   3\na _ | _ | _\nb _ | _ | _\nc _ | _ | _");
      });
    });
  });

  describe("Utilities", () => {
    test("the file exists", () => {
      expect(fs.existsSync("./src/utilities.js")).toBe(true);
    });

    describe("#isNotNull", () => {
      it("Should export the 'isNotNull' function", () => {
        const utilities = require("../src/utilities");
        expect(utilities.isNotNull).toBeInstanceOf(Function);
      });

      it("Should return 'false' when called with 'null'", () => {
        const { isNotNull } = require("../src/utilities");
        expect(isNotNull(null)).toBe(false);
      });
    });

    describe("#flattenArray", () => {
      it("Should export the 'flattenArray' function", () => {
        const utilities = require("../src/utilities");
        expect(utilities.flattenArray).toBeInstanceOf(Function);
      });

      it("Should flatten two arrays", () => {
        const { flattenArray } = require("../src/utilities");
        expect(flattenArray([[1], [2]])).toEqual([1, 2]);
      });
    });
  });

  describe("The game", () => {
    describe("ticTacToe.js", () => {
      test("the file exists", () => {
        expect(fs.existsSync("./src/ticTacToe.js")).toBe(true);
      });

      it("Should export a 'start' function", () => {
        const ticTacToe = require("../src/ticTacToe");
        expect(ticTacToe.start).toBeInstanceOf(Function);
      });
    });

    it("Should be playable", () => {
      let logs = "";
      const consoleLog = jest.spyOn(console, "log").mockImplementation((text) => {
        logs += text;
      });

      const reader = readerMockFactory([
        (question, callback) => {
          console.log(question);
          callback("a1");
        },
        (question, callback) => {
          console.log(question);
          callback("b1");
        },
        (question, callback) => {
          console.log(question);
          callback("a2");
        },
        (question, callback) => {
          console.log(question);
          callback("b2");
        },
        (question, callback) => {
          console.log(question);
          callback("a3");
        },
      ]);

      const tictactoe = require("../src/ticTacToe");
      const { state } = require("../src/gameState");
      state.a = [null, null, null];
      state.b = [null, null, null];
      state.c = [null, null, null];

      tictactoe.start(reader);
      expect(logs).toMatch(/you won/);
      consoleLog.mockRestore();
    });
  });
});
