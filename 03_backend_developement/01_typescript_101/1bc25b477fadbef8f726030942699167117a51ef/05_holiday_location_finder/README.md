# Holiday location finder

## Context and objectives

At first sight, Enums can be seen as not that useful. Why not use the classic object prototype, you may ask? Well, with enums, you can create objects that you can easily relate to, making constants more legible. With TypeScript enums, developers are free to create readable memory-efficient custom constants.

## Specs

### Program

- Build a simple program that outputs a list of continent to choose from, and asks the user to choose one of them.
- The program should output a random city from that continent. There should be five cities per continent.

This part requires the use of the NodeJS module `readline`. Please read the [documentation](https://nodejs.org/api/readline.html).

Your program should work pretty much like this:

```
***Welcome to HOLIDAY LOCATION FINDER***

This program will help you find a location based on the continent you will input.

Here is the list of continent to chose from:
- Europe
- North America
- South America
- Asia
- Africa
- Oceania

Please input your choice:
> Europe

You chose Europe. I think you really should go spend some time in Bruxelles, Belgium.
```

---

### Data structure

- Create an enum of continents. Initializing the values of your enum is not needed in this case (and will fail the tests if you do):

```ts
enum ARDA = {
  MiddleEarth,
  Aman,
  DarkLand,
  LandOfTheSun,
  NewLands
}
```

- Create an object of cities with the following data structure:

```ts
{
  MiddleEarth: ["Minas Anor", "Osgiliath", "Isengard"],
  ...
}
```

---

### Folder architecture

Now that we know how to `import`/`export` snippets of code, try to make use of it. Don't think this exercise as a big function. Split your code into multiple, reusable bits. To help you in this task, you should use the following folder architecture:

```md
├──data/
│ └── data.ts
├──utils/
│ ├── handleUserInput.ts
│ └── ...
└── holidayLocationFinder.ts
```

- `data/` - Put your data here (ie. your continent enum and cities object).
- `utils/` - This is a folder where you can place utility functions you can use throughout the application (ie. formatting functions, `getRandomCityFromContinent`, `handleUserInput`). Use those small functions to build bigger things with.

---

- Use `yarn start` to launch the program.

- You can use `yarn test` to help you during the development.

---

### Reminder

Here is the list of continent:

- Europe
- North America
- South America
- Asia
- Africa
- Oceania

I don't think I have to tell you why I did not put Antarctica there 😅.

---

### Tips

You will need to use `index signature` typing to access values from you cities object. You can find more information [here](https://www.typescriptlang.org/docs/handbook/interfaces.html#indexable-types), or refer to the course.

---

### Good practices

Before starting to code furiously, remember that writing some `pseudo code` is a really efficient practice for this kind of task.

Your program should not be case sensitive, meaning that a user inputting "europe", "Europe" or even "EuROpe" should get the same output. If you plan to go for the **style bonus** found under this section (and it is strongly encouraged to do so), I'd suggest using the `PascalCase` to help searching the enum for your conditions (ie. south america => SouthAmerica).

If you declare your `enum` outside of a function or a class, it is recommended to use the `ALL_UPPERCASE` syntax (signifying that this is a global constant).

---

### Style bonus 😎

To make your conditions cleaner, and more human friendly, you can use the JavaScript keyword `in`. More information in the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in).

You can make use of `regex` to "sanitize" the user input from symbols (ie: `.`, `/`, `_`, etc.). If you chose to, remember that [regexr](https://regexr.com/) if your best friend.
