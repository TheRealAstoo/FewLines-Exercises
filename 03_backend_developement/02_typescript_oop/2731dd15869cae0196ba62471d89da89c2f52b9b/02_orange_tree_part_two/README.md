# Orange tree part II

## Context and objectives

Now that we have our `Tree` blueprint, it's time to dive into the implementation of the `OrangeTree` class!

The goal of this part is to build an `OrangeTree` class by _extending_ the `Tree` class, and implement all the "business" logic.

## Specs

First, copy back your `Tree` class from the previous exercise in `src/index.ts`.

Here is a more detailed overview of what you must achieve with your orange tree:

**Attributes:**

- `age` (in year).
- `height` (in cm).
- `alive`.
- `oranges`: an array of oranges (you must use this emoji 🍊 in your code to pass the tests).

**Methods:**

- `ageOneYear`, used to increment the `age` property by 1, and increase the height, following these specs:

  - 25 centimeters per year, from 1 to 9 years old (included).
  - 10 centimeters per year, from 10 to 20 years old (included).
  - It should stop growing after 20 years old.
  -

- `isAlive`, used to compute if the tree dies or not, based on the following specs:

  - cannot die before 50 years old.
  - cannot live longer than 100 years old.
  - each year, starting from 50 years old, the chance of the tree dying increases.

- `seed`, used to set `age` and `height` to 0, and `alive` to `true`.

- `growOranges`, used reset `oranges` to 0, then increment oranges (🍊), based on the following specs:

  - 0 oranges (🍊) each years, from 0 to 4 years old (included).
  - 10 oranges (🍊) each years, from 5 to 10 years old (included).
  - 20 oranges (🍊) each years, from 11 to 20 years old (included).
  - 5 oranges (🍊) each years, from 21 to 40 years old (included).

- `pickAnOrange`, used to remove one orange (🍊) from `oranges`.

⚠️ Some details are not given right away. Do not hesitate to run the tests if you need some help.

As the owner of the tree, you should be able to:

- get its age.
- get its height.
- find if it is still alive.

You can use the `src/index.ts` file to help you test manually your `OrangeTree` class, by creating a `while` loop to display the life of the tree for example.
You can run this file with `yarn start`.

To run the tests, you have the following scripts:

- `yarn test`: run all tests.
- `yarn test:properties`: run all the tests related to the `Orange Tree` properties.
- `yarn test:ageOneYear`: run all the tests related to the `Orange Tree`'s `ageOneYear` method.
- `yarn test:isAlive`: run all the tests related to the `Orange Tree`'s `isAlive` method.
- `yarn test:growOranges`: run all the tests related to the `Orange Tree`'s `growOranges` method.
- `yarn test:pickAnOrange`: run all the tests related to the `Orange Tree`'s `pickAnOrange` method.
