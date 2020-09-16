const { read } = require("fs");
const readline = require("readline");
const clear = require("./clear");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const board = [
  {
    name: "tree",
    symbol: "🌳",
    isVisible: false,
  },
  {
    name: "ghost",
    symbol: "👻",
    isVisible: false,
  },
  {
    name: "tree",
    symbol: "🌳",
    isVisible: false,
  },
  {
    name: "ghost",
    symbol: "👻",
    isVisible: false,
  },
];


const displayBoard = (board, visible = false) => {
  const myDisplayedBoard = [];
  board.forEach((item,i) => {
    if (item.isVisible || visible) {
      let newItem = `${i + 1}:${item.symbol}`;
      myDisplayedBoard.push(newItem);
    } else {
      let newItem = `${i + 1}:?`;
      myDisplayedBoard.push(newItem);
    }
  });
  console.log(myDisplayedBoard);
};

const makeVisible = (item) => {
  item.isVisible = true;
};

const makeInvisible = (item) => {
  item.isVisible = false;
};

const memoryGame = () => {
  console.log("Welcome in the Memory Game!");
  displayBoard(board, true);
  reader.question("Press enter to start the game \n>", () => {
    clear();
    displayBoard(board);
    const chooseACard = () => {
      reader.question("Chose a card", (firstCard) => {
        clear();
        makeVisible(board[+firstCard - 1]);
        console.log(board[+firstCard - 1].name );
        displayBoard(board);
        reader.question("Chose a second card", (secondCard) => {
          clear();
          console.log(board[+firstCard - 1].name === board[+secondCard - 1].name);
          if (board[+firstCard - 1].name === board[+secondCard - 1].name) {
            makeVisible(board[+firstCard - 1]);
            makeVisible(board[+secondCard - 1]);
            chooseACard();
          } else {
            console.log("wrong!");
            makeInvisible(board[+firstCard - 1]);
          }
          displayBoard(board);
        });
      });
    };
    chooseACard();
  });
};

memoryGame(reader);


const symbols = {
  tree: "🌳",
  ghost: "👻",
  tooth: "🦷",
  fish: "🐟",
  imp: "😈",
  robot: "🤖",
  invader: "👾",
  apple: "🍏",
  car: "🚗",
  cold: "🥶",
  peach: "🍑",
  boom: "💥",
  bomb: "💣",
  boot: "👢",
  pumkin: "🎃",
  fox: "🦊",
  rabbit: "🐇",
  kiss: "💋",
  salad: "🥗",
  clown: "🤡",
};
