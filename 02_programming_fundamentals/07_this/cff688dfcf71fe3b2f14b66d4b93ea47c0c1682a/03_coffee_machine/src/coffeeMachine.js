const machine = {
  litersOfCoffee: 0,
  coffeeForExpresso: 0.08,
  coffeeForLongo: 0.15,
  fillWithLitersOfCoffee: function (coffeeToAdd) {
    this.litersOfCoffee += coffeeToAdd;
    return this;
  },
  expresso: function () {
    if (this.litersOfCoffee >= this.coffeeForExpresso) {
      this.litersOfCoffee -= this.coffeeForExpresso;
      return true;
    } else {
      return false;
    }
  },
  longCoffee: function () {
    if (this.litersOfCoffee >= this.coffeeForLongo) {
      this.litersOfCoffee -= this.coffeeForLongo;
      return true;
    } else {
      return false;
    }
  },
};

module.exports = machine;

