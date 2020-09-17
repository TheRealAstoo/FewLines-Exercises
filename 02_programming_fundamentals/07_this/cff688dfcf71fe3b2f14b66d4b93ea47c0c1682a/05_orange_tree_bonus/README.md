# Orange Tree - Bonus

One of the best and most used exercise to learn how to model objects in programming is the _Orange Tree_.

The goal is to represent with a single JavaScript Object the whole life of an Orange Tree, from its birth to its death.

## Specs

You should implement an `orangeTree` Object as follows:

**Attributes**

- `height` (in cm)
- `age` (in year)
- `oranges`
- `alive`

**Behaviours**

- `pickAnOrange`
- `ageOneYear`
- `seed`

**Business Rules**

- the Orange Tree should age every year.
- every year it should grow:
  - 25 centimeters until it is 10 years old.
  - 10 centimeters until it is 20 years old.
- every year it should produce:
  - 10 oranges when it's between 5 and 9 years old included.
  - 20 oranges when it's between 10 and 19 years old included.
  - 5 oranges when it's between 20 and 39 years old included.
- it should not die until it is at least 50 years old and can't get older than 100 years.
  - there should be a random probability that the tree dies between 50 and 99 years old included.
- When we `seed` an `orangeTree`, it resets all its attributes.

Bonus Point:
Make it so that the probability for the Orange Tree to die gets bigger as the time passes.

Tip:
Paying attention to the tests. They may help you understand the expected implementation details for this exercise.

_Feel free to create as many functions as you think you might need!_
