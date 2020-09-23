const products = require("./productsData.js");

const displayProducts = () => {
  console.log("**************************************************");
  console.log("SHOP");
  console.log("**************************************************");

  const otherOptions = ["back to menu", "quit"];

  const menu = [...products, ...otherOptions];

  menu.forEach((item, index) =>
    item.name
      ? console.log(`${index + 1} - ${item.name}: ${item.price}€ (quantity: ${item.quantity})`)
      : console.log(`${index + 1} - ${item}`),
  );
};

module.exports = displayProducts;
