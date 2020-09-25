# To Words

## Context and Objectives

Here the goal is to be able to check if a code behaves as expected.

## Specs

We have a program named `toWords` written by another developer. The code takes a sentence as parameter and returns a list of word.

We want you to add tests for this code and find if it's possible to write at least one test which prove this code is not working as it should be.

Bonus: Fix the code to ensure it works as it should.

## Coverage

You should aim for 100% coverage here.

## Regular Expressions

The code of this exercise is using _regular expressions_ in `sentence.split(/[.!, :]+/)`.
Let's look at this part to understand what happen:

First, `split` is a function that will cut a string in several parts and return them in an array.
It can be used with a string: `sentence.split(" ")`, if `sentence` is equal to `"two words"`, `split` would return `["two", "words"]` like this:

```javascript
const sentence = "two words";
const splitSentence = sentence.split(" ");
console.log(splitSentence); // ["two", "words"]
```

But we can also use `split` with a regular expression (often called _regex_).

```javascript
const sentence = "High-tech product";
const splitSentence = sentence.split(/[- ]+/);
console.log(splitSentence); // ["High", "tech", "product"]
```

The regex is the part between slashes: `/[.!, :]+/`. It's a syntax that is often hard to read because it's really meant for computer.
The goal of a regex is to make a split on more than one character at a time, here, we want to split on `.`, `!`, `,`, ` ` (space) and `:` meaning that these characters are not part of words and we want to cut a sentence around these characters.

🔎 For more information, you can look at [the regex courses](https://front.sparta.fewlines.dev/today/02_programming_fundamentals/11_Reboot_day_2/course) 🔍.

That being said, this is **NOT** the focus of this exercise, just know that if you want to split on more characters, you need to place it inside the brackets of the regex.
