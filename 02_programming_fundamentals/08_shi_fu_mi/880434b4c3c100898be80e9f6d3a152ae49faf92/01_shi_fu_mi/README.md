# SHIFUMI

## The Game

Most of people know how to play ShiFuMi (一二三) but if you need a refresh on the [rules](https://en.wikipedia.org/wiki/Rock_paper_scissors) take a look!

The goal of the day is to code this game in the terminal and we will go through it piece by piece.

## The game interface

In a program, whatever its purpose, we need an interface to get user inputs and present data to users.

### Readline

Like in the _First Program_ day, we will use `readline` to handle this part:

```js
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

### Start the game

We also need to start by greeting our player(s) and give them some hints or instructions:

```js
console.log("Welcome to ShiFuMi");

reader.question("Please choose a move\n> ", (move) => {
  // Handle the move
});
```

> This is **YOUR** game, feel free to use emojis and/or symbols, pimp it as much as you want!

### The Display

#### Clear the screen

If at any point you need to clear the screen, use:

```js
const clear = () => console.log("\x1B[2J\x1B[0f");

clear();
```

#### Symbols

Here are the symbols for your game.
You'll need to store them in variables to use them in the game.

```js
// ROCK
[
  "    ________        ",
  "---'   _ ,  |       ",
  "      (__(__)       ",
  "      (_____)       ",
  "      (____)        ",
  "---.__(___)         ",
];

// PAPER
[
  "      _______       ",
  "----'    ____)____  ",
  "            _______)",
  "            _______)",
  "           _______) ",
  "----.__________)    ",
];

// SCISSORS
[
  "    ____           ",
  "---'    |________  ",
  "     (__)________) ",
  "        _________) ",
  "      (____)       ",
  "---.__(___)        ",
];
```

Shifumi is a two-player game, and they play face to face. To reflect that, you should display it like this:

```
First Player's move
    ________
---'   _ ,  |
      (__(__)
      (_____)
      (____)
---.__(___)

Second Player's move
          ____
 ________|    '---
(________(__)
(_________
      (____)
       (___)__.---
```

> The second player's move should be reversed!!

## Goal of the day

When developing a project, _ANY project_, we need milestones. Here are some to guide you through the day:

1. The game allows you to play versus a totally dumb AI. It should select a random move each time.
2. The game allows you to play in a two players single round game version.
3. The game allows you to play in a two players best of 3 game version.
4. The game allows you to play versus an intelligent AI which [will have a strategy](https://arstechnica.com/science/2014/05/win-at-rock-paper-scissors-by-knowing-thy-opponent/#:~:text=Therefore%2C%20this%20is%20the%20best,thing%20that%20you%20just%20played.).

Let's start with a **basic step by step plan** for the **dumb AI version**:

- Greet the user.
- Ask the user for an input.
- Generate the AI choice.
- Print the player's and AI's choices.
- Compare the choices and compute the result of the round.
- Print the result to the player.

Here is the wanted output for this first version:

```
Welcome to the ShiFuMi!
Choose a move:
Rock Paper Scissors? [1, 2, 3]
> 1
Player move
    ________
---'   _ ,  |
      (__(__)
      (_____)
      (____)
---.__(___)

Cpu move
          ____
 ________|    '---
(________(__)
(_________
      (____)
       (___)__.---

The Player won!!

Play again ?(Y,n)
> n
Thanks for the game 😉
```

> Again, feel free to change the display, but the flow of a round should be pretty much like this.

### Additional tips

And here are some questions you should think of:

- What to do if the user's input is not correct?
- How to compute and store results?
- How to restart the game?
