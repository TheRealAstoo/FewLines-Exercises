# Number game

## Context and objectives

In this exercise, you have to code a game!
As you'll see, it's important to make your gameplay "natural" and "smooth" by giving hints to your user (like the range he has to choose from).

## Specs

Using streams, write a program that generates a random number in a given range (the mystery number) and asks the user to write a number (he should try to guess the number).

Here are the available answers of the program:

- It's not a number: "This was not a number"
- Out of range: "The number is between 1 and 100"
- Too low: "Too low"
- Too high: "Too high"
- Success: "You won!"

The program must loop until the user guesses the right number.

The `numberGame` function takes a `min` and a `max` optional numbers. For the random generated number, feel free to consider that min is always `1` (or have fun and try to generate a random integer between `min` and `max`)

> Hint: Don't hesitate to press `ctrl + c` to quit a running program.
