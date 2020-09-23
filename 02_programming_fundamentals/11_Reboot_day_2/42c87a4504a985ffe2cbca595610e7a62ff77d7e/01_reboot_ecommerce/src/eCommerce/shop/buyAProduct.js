const products = require("./productsData");

const cart = require("../cart/cart.js");

const buyAProduct = (product, reader, mainMenu) => {
  reader.question("How much? \n>", (productQuantityInput) => {
    if (product.quantity >= productQuantityInput) {
      product.quantity -= productQuantityInput;
      cart(product, productQuantityInput, reader, mainMenu);
    } else {
      console.log(`Vous n'avez pas assez d'argent pour acheter autant de ${product.name}`);
      buyAProduct();
    }
  });
};

module.exports = buyAProduct;
