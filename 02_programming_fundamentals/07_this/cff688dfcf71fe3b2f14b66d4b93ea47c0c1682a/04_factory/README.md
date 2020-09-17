# Human Factory

## Context and objectives

When developing applications, a developer often needs a large amount of similar data to work with.
In those cases, we don't want to have to create each object separately. What we want is commonly called a factory!

## Specs

In the course, we saw something like this:

```javascript
const abdel = {
  firstname: "Abdel",
  lastname: "Sadki",
  fullname: function () {
    return `${this.firstname} ${this.lastname}`;
  },
};
const frieda = {
  firstname: "Frieda",
  lastname: "Reiss",
  fullname: function () {
    return `${this.firstname} ${this.lastname}`;
  },
};
```

As you can guess, it would be too tedious if we wanted, let say, 10 000 users to play with and test our application.

You must code two functions in the `src/humanFactory.js` file:

### `humanFactory`

This function should take an optional object as a parameter.
If no object is given, here is what the function should return:

```javascript
const human = humanFactor();
human.firstName; // "John"
human.lastName; // "Doe"
human.genre; // "male"
human.job; // "unemployed"
human.fullname(); // "John Doe"
human.introduction; // "Hello! My name is John Doe."
```

If an object is given:

```javascript
const human = humanFactor({ genre: "female" });
human.firstName; // "Jane"
human.lastName; // "Doe"
human.genre; // "female"
human.job; // "unemployed"
human.fullname(); // "Jane Doe"
human.introduction(); // "Hello! My name is Jane Doe."

// or
const humanData = {
  firstName: "Henry",
  lastName: "Ford",
  job: "CEO@Ford",
  quote: "Coming together is a beginning; keeping together is progress; working together is success",
};
const human = humanFactor(humanData);
human.firstName; // "Henry"
human.lastName; // "Ford"
human.genre; // "male"
human.job; // "CEO@Ford"
human.fullname(); // "Henry Ford"
human.introduction(); // "Hello! My name is Henry Ford."
human.quote; // "Coming together is a beginning; keeping together is progress; working together is success"
```

As you can see, the given object should override the default data!

### `createHumans`

To speed up the process of human generation, code a `createHumans` function that takes an array of objects as a parameter and creates one human for each object:

```javascript
const [jane, john] = createHumans([{ genre: "female" }, {}]);
```

## Tests

As always, `yarn test` to test your code and, if you want to manually test it: `yarn start`!
