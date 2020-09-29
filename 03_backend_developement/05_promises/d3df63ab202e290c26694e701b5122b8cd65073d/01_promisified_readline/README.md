# PROMISIFIED READLINE

## CONTEXT AND OBJECTIVES

As you know it, the `readline` package uses callbacks to handle the user input and can't return its value.
In this exercise you will wrap the reader usage in a function to allow the use of promises.

### `fwl-readline`

For ease of use in Typescript and testing we give you the `fwl-readline` package.
Don't be affraid as it works pretty much the same way you used to with `readline`
It won't chant anything for you: take a loot at the `src/reader.ts` file.

## SPECS

### **function `ask`**

Code the `ask` function in the file `src/ask.ts`.

When a question is asked to the user, the function must:

- `resolve` the user input if it's different than an empty string (`""`):

```bash
Enter something
> something
Your input is:
"something"
```

- `reject` a new Error with `"Invalid input"` as a message if the user input is an empty string `""`.

```bash
Enter something
>
Error: Invalid input
```

**Parameters**

- `question`: a string.
  This is the question the user will be asked.
- `reader`: a readline reader. By default it must use the reader defined in `src/reader.ts`.

**Return**

The function must return a `Promise` to allow the use of `.then` and `.catch`.

### Test

```bash
# run tests:
yarn test

# run src/index.ts to try your code:
yarn start
```
