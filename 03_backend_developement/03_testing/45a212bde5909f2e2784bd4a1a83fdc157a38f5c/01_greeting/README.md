# Greeting

## Test coverage

Developers love to automate things and love tests so they automated testing.
We're not talking about artificial intelligence or machine learning but some automation around what parts of the code is tested.

What that means is that there's code that will tell us if you have tests that cover our code, line by line, function by function.

For instance, here is an example result:

```shell
Ran all test suites.
--------------------------------------------|----------|----------|----------|----------|----------------|
File                                        |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
--------------------------------------------|----------|----------|----------|----------|----------------|
All files                                   |    92.79 |       75 |      100 |      100 |                |
 index.ts                                   |    92.79 |       75 |      100 |      100 |                |
--------------------------------------------|----------|----------|----------|----------|----------------|
```

The command to obtain this result is `jest --coverage`.

The first column is for the files, the second `% Stmts` statements, the third cover conditional branching, fourth functions, fifth lines and the last column is here to warn where there are lines that aren't covered at all.

> Note: `--coverage` will create a directory named coverage, we can safely ignore what it contains and it should not be commited on a repository.

For some of today's exercises, we will ask you to add tests and you will be able to see if you tested enough with this coverage tool. Each time, we will ask you to aim for a certain percentage.

## Context and Objectives

The goal is to get started with testing

## Specs

We have a program named `greet` written by another developer. The code takes a name as input and greets the User.
If there is no User passed, the greeting is to the world. In both cases, the greetee is uppercased.

We want you to test this code to be sure it's working as expected.

In order to do that, you will need to analyse the existing code (you should not modify it) and create one test that check that calling `greet();` returns `Hello WORLD!` and that calling `greet("Francis");` returns `Hello FRANCIS!`.

Create a `src/index.test.ts` and write your tests in it.

## Coverage

You should aim for 100% coverage here.
