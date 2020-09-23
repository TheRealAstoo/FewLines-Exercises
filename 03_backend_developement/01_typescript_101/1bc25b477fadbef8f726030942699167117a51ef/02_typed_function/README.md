# Typing functions

## Context and objectives

Another pillar of TypeScript is function typing! Like we did with variables, we will now type functions.

## Specs

Create a function with a `tuple` parameter that prints two different outputs with `console.log`, based on the type.

The value of each item should be present at the _start_ of the string, in their respective `console.log()`.

The tuple should have a string at index 0, and a number at index 1.

- You can use `yarn test` to help you during the development.

- When you're happy with your work, try it with `yarn start`. **Don't forget to call your function to get the output in your terminal**.

**Hint**: You probably need the `typeof` keyword. Much like JavaScript, we can use `typeof` to query the type of an object.

```ts
const num: number;
console.log(typeof num); // 'number'
```

Note that the return value is written in string (`'string'`, `'number'`, `'boolean'`, etc.). For the full list, you can check the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof).
