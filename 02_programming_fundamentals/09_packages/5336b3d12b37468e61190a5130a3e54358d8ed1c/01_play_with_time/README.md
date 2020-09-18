# A first package

## Context and objectives

Different formats, relative time and time zones, various calendars ... Although it doesn't seem like it, **dates** are not an easy topic to manage.
A popular package called **`moment`** is here to try and help us on this matter!

This exercise is also a good start to learn how to read and search a documentation.

Read [Moment's documentation](https://momentjs.com/) to learn how to use the package in your code.

## Specs

Look in the `src/playWithTime.js` file. You should code your functions there.

You will also need to import `moment` and to export your functions from the file.

Code the following functions:

### formatDate

Should return a string of the given date with the following format:

```js
formatDate("2000-05-31"); // Wednesday 31st May 2000
```

### yearsSinceDate

Should return the number of years since a given date:

```js
yearsSinceDate("2000-05-31"); // 20
```

### daysSinceDate

Should return the rounded number of days since a given date:

```js
daysSinceDate("2000-05-31"); // 7394
```

### getDayFromDate

Should return the day of the week for a specific date.

```js
getDayFromDate("2000-05-31"); // Wednesday
```

## Restriction

⚠️ Note: You are not allowed to use the [`JavaScript Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) module, only `moment`!
