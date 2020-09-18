let litersOfCoffee = 0;

export const putLitersOfCoffee = function (liters) {
  litersOfCoffee += liters;
  return litersOfCoffee;
};


export const consumeLitersOfCoffee = function (quantityInCentiliters) {
  if (litersOfCoffee - quantityInCentiliters >= 0) {
    litersOfCoffee -= quantityInCentiliters;
    return true;
  } else {
    return false;
  }
};

