# Work with several files

## Context and objectives

When developing applications, it is not a rare thing to have to split the code into different files and functions. We call that maintainability because the code is easy to change without having to rewrite it all, unlike having all the code in one only place (and that is called [spaghetti code](https://en.wikipedia.org/wiki/Spaghetti_code) 🍝).

## Specs

Here is the actual coffee machine:

```js
const coffeeMachine = {
  litersOfCoffee: 0,
  expresso: function () {
    return this.serveACup(0.08);
  },
  fillWithLitersOfCoffee: function (liters) {
    this.litersOfCoffee += liters;
  },
  longCoffee: function () {
    return this.serveACup(0.15);
  },
  serveACup: function (quantityInCentiliters) {
    if (this.litersOfCoffee - quantityInCentiliters >= 0) {
      this.litersOfCoffee -= quantityInCentiliters;
      return true;
    } else {
      return false;
    }
  },
};
```

Your job in this exercise is to split the coffee machine into several modules.

### Container

`src/container.js` should handle the available quantity of coffee and is responsible for allowing or not to serve a coffee, depending on the remaining quantity.

### Drinks

`src/drinks.js` is the module responsible for the coffees part of the machine. It must export only the coffees functions.

### Machine

`src/machine.js` is the file which puts all of it together. It should import the other functions and use them to represent the coffee machine.

### Index

`src/index.js` is the only file where we use the machine. That's it. Feel free to play with it as much as you want ☕.

## Testing

Run `yarn test` to test your code, it will give you hints about how to organize it.
