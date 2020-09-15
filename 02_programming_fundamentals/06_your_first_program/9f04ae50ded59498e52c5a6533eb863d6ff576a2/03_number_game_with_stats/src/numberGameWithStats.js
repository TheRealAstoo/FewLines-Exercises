const numberGameWithStats = (reader, min = 1, max = 100) => {
  const mysteryNumber = Math.round(Math.random() * (max - min) + min);
  console.log(mysteryNumber);
  const attempts = [];
  let userQuestion = "Adventurer, you will pass if you guess my magical number \n> ";
  const askForNumber = () => {
    reader.question(userQuestion, (guessedNumber) => {
      if (+guessedNumber === mysteryNumber) {
        attempts.push(guessedNumber);
        if (attempts.length === 1) {
          console.log(`You won with only ${attempts.length}.. Seem like a cheater ! Or are you just a lucky b*tch ?!`);
        } else {
          console.log(`You won with ${attempts.length} attempts.. Not that bad ☺️`);
        }
        reader.close();
      } else if ((+guessedNumber < min) || (guessedNumber > max)) {
        attempts.push(guessedNumber);
        userQuestion = `Number is between ${min} and ${max} \n> `;
        askForNumber();
      } else if (+guessedNumber < mysteryNumber) {
        attempts.push(guessedNumber);
        userQuestion = "Too low \n> ";
        askForNumber();
      } else if (+guessedNumber > mysteryNumber) {
        attempts.push(guessedNumber);
        userQuestion = "Too high \n> ";
        askForNumber();
      } else {
        attempts.push(guessedNumber);
        userQuestion = "This was not a number \n> ";
        askForNumber();
      }
    });
  };
  askForNumber();
};

module.exports = numberGameWithStats;