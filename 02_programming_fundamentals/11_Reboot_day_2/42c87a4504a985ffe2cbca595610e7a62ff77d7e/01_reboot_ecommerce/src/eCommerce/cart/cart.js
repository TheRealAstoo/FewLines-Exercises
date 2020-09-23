const cartDisplay = require("./cartDisplay.js");

const cartProducts = [];

const cart = (product, productQuantityInput, reader, mainMenu) => {
  let cartProduct = product;
  if (cartProducts.includes(cartProduct.name)) {
    cartProduct.quantity += productQuantityInput;
  } else {
    cartProduct.quantity = productQuantityInput;
    cartProducts.push(cartProduct);
  }

  cartDisplay(cartProducts, reader, mainMenu);
};

module.exports = cart;
