# Typing classes

## Context and objectives

Learning how to type classes is a really important skill in your TypeScript tool box. Let's see how to do it!

## Specs

Create a typed class `Bird` with the following specs:

- it should be initialized with the an `age` in month (integer) in the constructor;
- it should have the following methods:

  - `sing` that prints "Cui cui" with `console.log()`.
  - `fly` :
    - takes a number of second as parameter.
    - if `age <= 1`, the method should print "The bird is too young to fly".
    - otherwise, the method should print "The bird flew x meters in x seconds" based on two conditions:
      - if `1 < age <= 3`, the bird should fly at a speed of 1m/s.
      - if `age > 3`, the bird should fly at a speed of 2m/s.

- You can use `yarn test` to help you during the development.

- When you're happy with your work, try it with `yarn start`. **Don't forget to call your class's methods to get the output in your terminal**.
