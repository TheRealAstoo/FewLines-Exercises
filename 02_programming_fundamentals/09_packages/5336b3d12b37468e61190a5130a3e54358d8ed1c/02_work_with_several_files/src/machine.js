import { putLitersOfCoffee } from "./container.js";
import { expresso, longCoffee } from "./drinks.js";


const fillWithLitersOfCoffee = function (liters) {
  return putLitersOfCoffee(liters);
};

export {
  fillWithLitersOfCoffee,
  expresso,
  longCoffee
};