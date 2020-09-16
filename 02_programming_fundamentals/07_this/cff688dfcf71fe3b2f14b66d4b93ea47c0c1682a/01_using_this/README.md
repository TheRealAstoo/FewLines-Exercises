# Using this

## Context and Objectives

The goal of this exercise is for you to get used to using `this`.

## Specs

### Introducing yourself

Code the method `introduceMyself` to this object using its full name and its age.

```javascript
const person = {
  firstname: "Abdel",
  lastname: "Sadki",
  age: 42,
  fullname: function () {
    return `${this.firstname} ${this.lastname}`;
  },
  // [...]
};

const introduction = person.introduceMyself();
console.log(introduction); // Hello! I'm Abdel Sadki and I'm 42
```

## Testing

As usual, run the tests with `yarn test` and feel free to play with your code in the `src/index.js`
