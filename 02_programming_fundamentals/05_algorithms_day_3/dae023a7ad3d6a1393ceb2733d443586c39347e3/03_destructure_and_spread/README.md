# Destructure and spread

## Context and Objectives

Destructuring and spread operators are common when coding with Javascript and it is important to understand how to use them.
In this exercise, you'll practice with some arrays and objects to spread and destructure.

## Write "Prettier" code

Same as in the previous exercises, don't forget to use Prettier to help you format the code!

## Specs

⚠️ You don't always have to code the entire functions in this exercise. You'll get some guidelines in the files like:

```js
/** Complete here */
// Code here
```

### Objects

Code in the `src/objectsDestructureSpread.js` file.

The `getConfig` function should take an **optional** `config` object parameter, override it with the defaut configuration and return it, like this:

```js
const userConfig = {
  user: {
    name: "John",
    password: "123123",
    admin: true,
  },
  hardware: {
    CPUThreads: 2,
  },
};
const config = getConfig(userConfig);

// config should looks like:
{
  user: {
    name: "John",
    password: "123123",
    admin: true
  },
  hardware: {
    CPUThreads: 2,
    memory: 2,
    diskSpace: 20
  },
}
```

The `logInfos` function takes a user `object` parameter and should log the user's information.
A user is formed like this:

```js
{
  firstName: "John",
  lastName: "Rambo",
  address: {
    city: "Hope",
    country: "Canada"
  }
}
```

For this user, the function should log:

```
"John Rambo lives in Hope, Canada."
```

Each user information is **optional** and must be replaced by `<REDACTED>` in the log if it's not present in the initial user object.

### Arrays

Code in the `src/arraysDestructureSpread.js` file.

The `arrayCrusher` function takes two arrays as parameters and should return only one array with all the elements in it.
For example:

```js
const numbers = arrayCrusher([1, 2], [3, 4]);
console.log(numbers); // [1, 2, 3, 4]
```

The `recursiveBouncer` function takes an array as a parameter. It has to use use the array destructuring method to separate and log the first element and then, use recursion to do the same with the remainder of the array, like this:

```js
recursiveBouncer([1, 2, 3]);
// will log
1
2
3
```

## Tests

You can run `yarn test` at any time to test your code.

Feel also free to play with the code in the `src/index.js` file if you want.
