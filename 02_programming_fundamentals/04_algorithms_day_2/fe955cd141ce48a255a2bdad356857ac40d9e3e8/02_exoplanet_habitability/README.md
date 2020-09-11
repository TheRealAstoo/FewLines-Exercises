# Exoplanet Habitability

## Context and Objectives

The goal of this exercise is to provide a better understanding of functions and conditional operations.
Read and analyze the pdf article `Exoplanets_around_Trappist-1` in your `src` directory.

## Specs

The article describes some conditions that **stars** and **planets** needs to fulfill for life to flourish.

Using the conditions described in the article, write a function `canHabitateLife` that must return a boolean to answer the question "can this planet be suitable for life?".

Two objects representing a star and a planet are given to you so you can test your function.

**E.g:**

```js
const star = { spectralClass: "M" };

const planet = {
  mass: 1.02,
  radius: 1.12,
  rotationStability: true,
  habitalZone: false,
};
```
