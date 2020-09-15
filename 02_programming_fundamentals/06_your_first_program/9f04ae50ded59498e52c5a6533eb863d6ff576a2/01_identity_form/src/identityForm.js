const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const identityForm = (reader) => {
  reader.question("What is your first name? ", (firstName) => {
    reader.question("what is your last name ?", (lastName) => {
      reader.question("what is your age ?", (age) => {
        console.log(`Your name is ${firstName} ${lastName} and you are ${age}.`);
        reader.close();
      });
    });
  });
};

identityForm(reader);
module.exports = identityForm;
