const sayGoodBye = require("../sayGoodBye/sayGoodBye.js");
const displayProducts = require("./displayProducts.js");
const products = require("./productsData.js");
const buyAProduct = require("./buyAProduct");

const shop = (reader, mainMenu) => {
  displayProducts();

  reader.question("Choose a product \n>", (shopMenuInput) => {
    switch (shopMenuInput) {
      case "1":
        buyAProduct(products[+shopMenuInput - 1], reader, mainMenu);
        break;
      case "2":
        buyAProduct(products[+shopMenuInput - 1], reader, mainMenu);
        break;
      case "3":
        buyAProduct(products[+shopMenuInput - 1], reader, mainMenu);
        break;
      case "4":
        buyAProduct(products[+shopMenuInput - 1], reader, mainMenu);
        break;
      case "5":
        buyAProduct(products[+shopMenuInput - 1], reader, mainMenu);
        break;
      case "6":
        mainMenu(reader);
        break;
      case "7":
        sayGoodBye(reader);
    }
  });
};

module.exports = shop;
