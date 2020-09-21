import clear from "./clear.js";

const firstQuestion = (reader) => {
  reader.question("Enter the first number\n> ", (firstNumber) => {
    let firstNumberParsed = firstNumber.replace(/["']/g, "");
    if (isNaN(firstNumberParsed)) {
      console.log("Ce n'est pas un chiffre. Refaites le à nouveau :\n");
      firstQuestion(reader);
    }
    const secondQuestion = () => {
      reader.question("Choose an operation: [ + - * / ]\n> ", (operator) => {
        if ((operator === "+") || (operator === "-") || (operator === "*") || (operator === "/" )) {
          let operatorParsed = operator.replace(/["']/g, "");
          const thirdQuestion = () => {
            reader.question("Enter the second number\n> ", (secondNumber) => {
              let secondNumberParsed = secondNumber.replace(/["']/g, "");
              if (isNaN(secondNumberParsed)) {
                console.log("Ce n'est pas un chiffre. Refaites le à nouveau :\n");
                thirdQuestion(reader);
              } else {
                let notComputed = `${firstNumberParsed} ${operatorParsed} ${secondNumberParsed}`;
                let computed = eval(notComputed);
                console.log(`${notComputed} = ${computed}`);
                const restartOrLeave = () => {
                  reader.question("Voulez vous refaire un calcul ? [y/n] \n>", (finalAnswer) => {
                    if ((finalAnswer === "y") || (finalAnswer === "Y") || (finalAnswer === "n") || (finalAnswer === "N")) {
                      if ((finalAnswer === "y") || (finalAnswer === "Y")) {
                        firstQuestion(reader);
                      } else {
                        clear();
                        console.log("goodbye ");
                        reader.close();
                      }
                    } else {
                      console.log("je ne comprend pas votre réponse, veuillez bien noter n ou y");
                      restartOrLeave();
                    }
                  });
                };
                restartOrLeave();
              }
            });
          };
          thirdQuestion();
        } else {
          console.log("Ce symbole ne fait pas partie de ceux proposés. Refaites le à nouveau :\n");
          secondQuestion(reader);
        }
      });
    };
    secondQuestion();
    
  });
};

export default firstQuestion;