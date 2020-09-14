// A function that takes two parameters, the second one being a callback function

const getInput = (userInput, callBack) => {
  const key = userInput.key;
  const giveMeKey = callBack(key);
  console.log(`hello ${userInput.user}`, giveMeKey);
};

// Leave the line below for tests to work
module.exports = getInput;
