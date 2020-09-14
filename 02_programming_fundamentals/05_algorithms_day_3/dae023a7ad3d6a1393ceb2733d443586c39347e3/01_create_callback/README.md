# Create a callback

## Context and Objectives

Let's start with something quite common: you want to use code you did not produce yourself and this code expects a callback.
You then have to conform to that code and build the callback to obtain the result you want.

## Write "Prettier" code

Sometimes, manually formatting code is a real pain, for example, we don't want to see that:

```js
const user = {lastName: 'Elton',firstName:"John", address:
  {city: "London"} 
  }
```

but instead we want that:

```js
const user = { lastName: "Elton", firstName: "John", address: { city: "London" } };
```

From now on you have access to _Prettier_ which will help you to format the code (given it is correct code with "bad" formating).
To use it, open VSCode command pallet with `cmd + shift + p` and search for `Format document`.

## Specs

In the `src/index.js` file you'll find this code:

```javascript
const sayHello = require("./callback");

const thisIsThePlayer = (callback) => {
  const player = { name: "Spartacus", life: 100, strength: 100, agility: 100 };
  callback(player);
};

thisIsThePlayer(sayHello);
```

the `thisIsThePlayer` function waits for a _callback function_ as a parameter.

In the **`src/callback.js` file**, write a `sayHello` **arrow function**. It should take a `player` as a parameter and greet the player by its name when we execute the code:

```js
"Hello, Spartacus";
```

### Run the code

You can try your code by running `node src/index.js` or `yarn start` in your terminal.
