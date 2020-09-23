const sayGoodBye = require("../sayGoodBye/sayGoodBye.js");

const cartDisplay = (cartProducts, reader, mainMenu) => {
  console.log("**************************************************");
  console.log("CART");
  console.log("**************************************************");
  let cartTotalPrice = 0;

  cartProducts.forEach((product, index) => {
    cartTotalPrice += product.price * product.quantity;
    console.log(`${index + 1} - ${product.name}: (quantity: ${product.quantity})`);
  });

  console.log("**************************************************");
  console.log(`TOTAL: ${cartTotalPrice}€`);
  console.log("**************************************************");
  console.log("1 - Back to menu");
  console.log("2 - Quit");

  reader.question("Choose an action \n>", (action) => {
    switch (action) {
      case "1":
        mainMenu(cartProducts, reader, mainMenu, cartDisplay);
        break;
      case "2":
        sayGoodBye(reader);
        break;
      default:
        console.log("je ne comprend pas, veuillez taper 1 ou 2");
    }
  });
};

module.exports = cartDisplay;
