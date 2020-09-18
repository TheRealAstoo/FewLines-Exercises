const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const clear = () => console.log("\x1B[2J\x1B[0f");

const moves = {
  rock: [
    "    ________        ",
    "---'   _ ,  |       ",
    "      (__(__)       ",
    "      (_____)       ",
    "      (____)        ",
    "---.__(___)         ",
  ],
  paper: [
    "      _______       ",
    "----'    ____)____  ",
    "            _______)",
    "            _______)",
    "           _______) ",
    "----.__________)    ",
  ],
  scissors: [
    "    ____           ",
    "---'    |________  ",
    "     (__)________) ",
    "        _________) ",
    "      (____)       ",
    "---.__(___)        ",
  ],
};

console.log("Welcome to ShiFuMi");

const welcome = () => {
  Object.keys(moves).forEach((move, index) => {
    console.log(`${index + 1} - ${move}`);
  });
};

welcome();

const reloadGame = (result, theRobotSpeak, playTheGame) => {
  reader.question(theRobotSpeak, (playerAnswer) => {
    if (playerAnswer === "y" || playerAnswer === "Y") {
      clear();
      console.log("C'est reparti, mon kiki 😎");
      welcome();
      playTheGame();
    } else if (playerAnswer === "n" || playerAnswer === "N") {
      clear();
      console.log(`je comprend.. Ce n'est pas marrant de ${result} comme ça. A la prochaine 😘`);
      reader.close();
    }
  });
};

const startTheGame = () => {
  let theRobotSpeak =
    "Choisissez un move en appuyant sur 1, 2 ou 3 puis notre robot jouera son tour (pas de triche, promis)\n";

  reader.question(
    "Salut aventurier, es-tu un joueur solo ou as-tu un pote avec qui jouer ? (solo/multi)\n",
    (selectMod) => {
      let player2Move = "";
      const playerOrIA = () => {
        if (selectMod === "solo" || selectMod === "SOLO") {
          player2Move = `${Math.floor(Math.random() * Object.keys(moves).length)}`;
        } else {
          console.log("Je pense que vous vous êtes trompé de touche 🤔\n");
        }
      };

      const playTheGame = () => {
        reader.question(theRobotSpeak, (playerMove) => {
          if (playerMove === "1" || playerMove === "2" || playerMove === "3") {
            const newParenthesis = {
              ")": "(",
              "(": ")",
            };

            let result = "";

            if (selectMod === "multi" || selectMod === "MULTI") {
              reader.question("À vous de choisir (1, 2 ou 3)", (player2MoveInput) => {
                player2Move = player2MoveInput;
                return player2Move;
              });
            }

            const secondPlayerMove = moves[Object.keys(moves)[+player2Move]]
              .join("\n")
              .split("")
              .reverse()
              .join("")
              .replace(/\(|\)/g, function (matched) {
                return newParenthesis[matched];
              });

            console.log(`First Player's move \n ${moves[Object.keys(moves)[playerMove - 1]].join("\n")} \n`);
            console.log(`Second Player's move \n ${secondPlayerMove}\n`);

            if (playerMove == +player2Move + 1) {
              theRobotSpeak = "Celle là c'était pour du beurre, on en refait une ? 😎😎 (y/n) \n >";
              result = "Ex aequo";
              reloadGame(result, theRobotSpeak);
            } else if (
              (playerMove == 1 && +player2Move + 1 === 2) ||
              (playerMove == 2 && +player2Move + 1 === 3) ||
              (playerMove == 3 && +player2Move + 1 === 1)
            ) {
              result = "perdre";
              theRobotSpeak = "Tu veux essayer de re perdre ? 😎😎 (y/n) \n >";
              console.log("you lose, loser !!! 😂😂😂😂😂");
              reloadGame(result, theRobotSpeak, playTheGame());
            } else {
              result = "gagner";
              theRobotSpeak = "Prêt à perdre, cette fois-ci ? (y/n) \n >";
              console.log("GG, vous gagnez.. Pour cette fois 😎");
              reloadGame(result, theRobotSpeak, playTheGame());
            }
          } else {
            theRobotSpeak = "Je pense que vous vous êtes trompé de touche 🤔\n";
            startTheGame();
            welcome();
          }
        });
      };
      playTheGame();
    },
  );
};
startTheGame();
