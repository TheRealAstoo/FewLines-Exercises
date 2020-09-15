const numberGame = (reader, min = 1, max = 100) => {
  const mysteryNumber = Math.round(Math.random() * (max - min) + min);
  console.log(mysteryNumber);
  let userQuestion = "Adventurer, you will pass if you guess my magical number \n> ";
  const askForNumber = () => {
    reader.question(userQuestion, (guessedNumber) => {
      if (+guessedNumber === mysteryNumber) {
        console.log("You won!");
        reader.close();
      } else if ((+guessedNumber < min) || (guessedNumber > max)) {
        userQuestion = `Number is between ${min} and ${max} \n> `;
        askForNumber();
      } else if (+guessedNumber < mysteryNumber) {
        userQuestion = "Too low \n> ";
        askForNumber();
      } else if (+guessedNumber > mysteryNumber) {
        userQuestion = "Too high \n> ";
        askForNumber();
      } else {
        userQuestion = "This was not a number \n> ";
        askForNumber();
      }
    });
  };
  askForNumber();
};

module.exports = numberGame;
