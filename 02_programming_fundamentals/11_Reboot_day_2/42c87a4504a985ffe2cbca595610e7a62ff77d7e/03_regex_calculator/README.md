# Regex Calculator

## Context and objectives

You already coded a basic calculator. Initially, the interface asked for:
- a first number
- an operator (`+`, `-`, `*`, `/`)
- a second number

But it is tedious to enter the operation like this.

## Specs

Code a `calculator` function in `src/calculator.js`.
This function must take a string as a parameter and returns the result if provided with a valid operation like this:

```javascript
calculator("1+1")
calculator("1 - 1")
calculator("4 /2")
calculator("1.5 * 2,5")
```
> 👀 Look closely at what you get! Are there spaces, '`.`', '`,`'?

If it is not a valid operation, it should throw an error saying: `"Can't process the operation"`:

```
Enter an operation> I'm not an operation
readline.js:1154
            throw err;
            ^

Error: Can't process the operation 👈
```

## Tests

As always, feel free to `yarn test` when you want.
You can also use the interface provided in `src/index.js` to manually test your work.
