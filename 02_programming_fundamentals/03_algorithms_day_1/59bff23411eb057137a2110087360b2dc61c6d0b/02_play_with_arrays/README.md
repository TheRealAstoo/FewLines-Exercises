# Playing with Arrays

## Context and Objectives

Arrays are really useful for a lot of things, as you will see throughout this course.
That's why you need to be familiar with them.

Remember to look in [the documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) if you need help or more information.

## Specs

**Note**: To run this file, enter `node ./src/02_play_with_arrays/<current_exercise>.js` in the terminal.

### Define arrays and access to their values

> [01 arrays]

- Create an array called `digits` with numbers **from 0 to 9**;
- Create a constant called `first` for the **first slot** of your array;
- Create a constant called `last` for the **last slot** of your array;
- Create a constant called `sixth` for the slot at **the position 6** of your array;

### Use some methods

> [02 arrays methods]

For this exercice, you can use those methods: **[push( )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)**, **[join( )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)** and **[length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)**.

- Rewrite your array `digits` using one `push()` call per number;
- Rewrite your constant `last` using `length`;
- Create another array called `litteralDigits` from **zero to nine** where each array entry is a spelled-out number (E.g. "zero", "one", ...);
- Use `join()` to create, into the constant `allDigits`, a string like this : `zero - one - two ...`.
