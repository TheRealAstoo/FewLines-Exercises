# Colorful Numbers - Bonus

## Context & Objectives

A number can be decomposed in sub-sequences.

For example, the number `3245` is composed of the following sub-sequences:

- `3`, `2`, `4` and `5`
- but also `32`, `24`, `45`
- and finally `324` and `245`

A colorful number is a number for which the digits and the products of its sub-sequences are **all** different.

In the given example, the number `3245` is **colorful** because the product of each sub-sequence and its digits are all different:

- `3`, `2`, `4` and `5`
- are different from `6` (`3*2`), `8` (`2*4`), `20` (`4*5`)
- and also different from `24` (`3*2*4`) and `40` (`2*4*5`)
- are different from `120` (`3*2*4*5`)

So, the final sequence would be:

```
[ 3
, 2
, 4
, 5
, 3 * 2
, 2 * 4
, 4 * 5
, 3 * 2 * 4
, 2 * 4 * 5
, 3 * 2 * 4 * 5
]
```

## Specs

Implement a function `isColorful(number)` that will return `true` if the given number is colorful or `false` if the given number is not colorful.
