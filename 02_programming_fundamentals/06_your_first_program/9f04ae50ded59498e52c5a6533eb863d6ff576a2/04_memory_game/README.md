# Memory Game

## Context and objectives

Memory is a game where you have turned-over cards in front of you and you must find pairs.
You can return two cards at a time, if they are the same, they stay visible, if not, they go back to being flipped over.

A full game sequence should look like this:

```
Welcome in the Memory Game!
[ '1:🐰', '2:🎃', '3:🐰', '4:🎃' ]
Press [Enter] to start!
>

🖥  clear the screen 🖥
[ '1:❔', '2:❔', '3:❔', '4:❔' ]
choose a card
> 1

🖥  clear the screen 🖥
[ '1:🐰', '2:❔', '3:❔', '4:❔' ]
choose a card
> 2

🖥  clear the screen 🖥
[ '1:🐰', '2:🎃', '3:❔', '4:❔' ]
Wrong!
Press [enter] to continue!


🖥  clear the screen 🖥
[ '1:❔', '2:❔', '3:❔', '4:❔' ]
choose a card
> 1

🖥  clear the screen 🖥
[ '1:🐰', '2:❔', '3:❔', '4:❔' ]
choose a card
> 3

🖥  clear the screen 🖥
[ '1:🐰', '2:❔', '3:🐰', '4:❔' ]
choose a card
> 2

🖥  clear the screen 🖥
[ '1:🐰', '2:🎃', '3:🐰', '4:❔' ]
choose a card
> 4

🖥  clear the screen 🖥
[ '1:🐰', '2:🎃', '3:🐰', '4:🎃' ]
You won!
```

For this exercise the only available test you'll have is

> "Make your game work" 😉.

## How to start?

### The game interface

You will need a game interface, and you'll have to make it through `readline` and `console.log` as we saw in the previous exercises!

```js
const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

In your code, you'll have access to a `clear` function provided that erases what's on the screen to hide the board.

To use it:

```js
clear();
```

### The board

For your game to work, you will need to present a board to the player.
This board must contain **at least 2 pairs of symbols**, but feel free to put as many as you want!

```
[ '1:🐰', '2:🎃', '3:🐰', '4:🎃' ]
```

You could even do something like this **if you want**:

```
Choose an even board size between 4 and 40
40
[
  '1:🍑',  '2:🌳',  '3:👾',  '4:👻',
  '5:🦊',  '6:💥',  '7:🥶',  '8:🍏',
  '9:💋',  '10:🤖', '11:🤖', '12:🎃',
  '13:🥗', '14:🐇', '15:🦊', '16:🥗',
  '17:👻', '18:🚗', '19:👾', '20:😈',
  '21:👢', '22:🐟', '23:💣', '24:🤡',
  '25:🐇', '26:💣', '27:💥', '28:😈',
  '29:🥶', '30:🦷', '31:🌳', '32:🤡',
  '33:🦷', '34:🍑', '35:🍏', '36:💋',
  '37:👢', '38:🚗', '39:🎃', '40:🐟'
]
```

For this part, you will need

- a `createBoard` function, that returns the board.
- a `shuffle` function, to ... shuffle the board!

**`createBoard`** can return a hard-coded array at first if you want. Once things work, feel free to implement a more complex version to randomly select symbols for example.

But remember:

- Each board symbol must be present in pairs.
- You'll need to store the information telling if the symbol has been discovered by your player or not.

### The display

Here are some tips for the board display:

- Even if no symbols have been discovered yet, you'll need a way to show them all, like at the beginning of the game:
  ```
  Welcome to the Memory Game!
  [ '1:🐰', '2:🎃', '3:🐰', '4:🎃' ]
  Press [Enter] to start!
  >
  ```
- When a symbol is chosen by the user, its "state" changes. When we display `[ '1:🐰', '2:🎃', '3:🐰', '4:🎃' ]` it doesn't mean that we stored exactly that in a variable. In reality, each element of the board should probably be a _more complex_ object than a `string`, maybeeeeeee... An `object`? 😇
- When your board's elements have their state, it should change depending on the user choices:

  ```
  🖥  clear the screen 🖥
  [ '1:🐰', '2:❔', '3:❔', '4:❔' ]
  choose a card
  > 2

  🖥  clear the screen 🖥
  [ '1:🐰', '2:🎃', '3:❔', '4:❔' ]
  Wrong!
  Press [enter] to continue!
  ```

### The Game Loop

The logic of your game lies in the game loops. As long as the player doesn't win, he or she will continue to play, so... What happens here?

- The player chooses a card.
- The player chooses another card.
  - if both match, they stay visible.
  - if it was the last no visible card on the game, the player wins!
  - if not, tries to find another pair.
  - if both don't match, they become hidden again, and the player gives another try.

### What could happen during the game

In a program like a game, as the one you'll code here, it's important to take care of your users.
Give them some hints, like the type of input you wait for (a number? a string?), and expect that they won't do as you would if you were playing your own game or using your own application.

As an ancestral old adage says "If a user can do something wrong, he will".
