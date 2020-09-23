# Playing with primitive types

## Context and objectives

Primitive typing is the foundation of TypeScript. Let's see how to do this in action!

## Specs

Type the following variables:

> `const myVariable: valueType = value`.

- a constant called `hello`, binded to a string: "Sparta";
- a constant called `foo`, binded to an integer: 12;
- a constant called `bar`, binded to an integer: 8;
- a constant called `sumResult`, binded to the sum of foo and bar;
- a constant called `digits`, binded to an array from zero to nine.
- a constant called `isOpen`, binded to a boolean: `false`.
- a constant called `empty`, binded to a value of `null`.

> It is quite difficult to test if a variable has been typed explicitly, as it is considered bad practice for `strings`, `numbers` and `boolean`. As you are making your first steps in the TypeScript world, please try your best to not "cheat" by avoiding implicit typing.

- You can use `yarn test` to help you during the development.
