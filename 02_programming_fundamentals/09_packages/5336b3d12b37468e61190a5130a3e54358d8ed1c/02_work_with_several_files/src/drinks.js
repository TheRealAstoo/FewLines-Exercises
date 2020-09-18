import { consumeLitersOfCoffee } from "./container.js";

export const expresso = function () {
  return consumeLitersOfCoffee(0.08);
};

export const longCoffee = function () {
  return consumeLitersOfCoffee(0.15);
};
