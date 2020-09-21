# Refactor Tic Tac Toe

# Context and objectives

Not each JavaScript project has been written with the `import` / `export` ES6 syntax. It's not rare to find a project which is based on the initial one. In those cases, use code from different modules must be done with `require` and it sometimes leads to code refactoring: modify the code and integrate it in the codebase.

## Specs

Look at the `src/oldTicTacToe.js` file. It's the code base of TicTacToe game!
Feel free to play by executing the file 😉.

The code is more easily maintainable when it is written in several files rather than one looooooong file with hundreds (and sometimes, thousands) of lines.
It's your turn to cut this code down into multiple files, separated by concerns.

### Split the code

First, create those files:

- **`src/display.js`**: This one will be responsible for the display part of the game: `renderBoard` for example.
- **`src/gameState.js`**: This file should share the code needed to handle the board state part of the game.
- **`src/utilities.js`**: Here you should put the _utilities_ code part, meaning functions not needed to operate the game itself but to help your code working.
- **`src/ticTacToe.js`**: This is the file which has to export the game.

For this to work you will have to modify some code, for example, **some functions will need additional parameters**.

You also have to use **`module.exports`** to export the code from a file and **`require`** to import it somewhere else.

### Play again

The final objective of the exercise is to make your game works with the command `yarn start`. You need to add it to your `package.json` file.

`yarn start` should start the `src/index.js` file as it is. Don't modify it: We want to be able to start the game with `ticTacToe.start(reader);` in it.

## Tests

At any time, run `yarn test` to help you.
You can also press `ctrl + c` at any moment to quit a running program.
