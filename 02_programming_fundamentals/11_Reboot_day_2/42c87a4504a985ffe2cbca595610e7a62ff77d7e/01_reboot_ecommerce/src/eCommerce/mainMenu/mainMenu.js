const shop = require("../shop/shop.js");
const sayGoodBye = require("../sayGoodBye/sayGoodBye.js");
const cartDisplay = require("../cart/cartDisplay.js");

const mainMenu = (reader) => {
  console.log("**************************************************");
  console.log("MENU");
  console.log("**************************************************");

  const menuOptions = ["Buy a product", "Show cart", "Checkout", "Quit"];

  menuOptions.forEach((option, index) => console.log(`${index + 1} - ${option}`));

  const menuOptionQuestion = () => {
    reader.question("Choose an action \n>", (menuInput) => {
      switch (menuInput) {
        case "1":
          shop(reader, mainMenu);
          break;
        case "2":
          cartDisplay(cartProducts, reader, mainMenu);
          break;
        case "3":
          console.log("Checkout");
          break;
        case "4":
          sayGoodBye(reader);
          break;
        default:
          console.log("Je n'ai pas compris votre requête, merci d'écrire 1, 2, 3..");
          mainMenu(reader);
      }
    });
  };
  menuOptionQuestion();
};

module.exports = mainMenu;
