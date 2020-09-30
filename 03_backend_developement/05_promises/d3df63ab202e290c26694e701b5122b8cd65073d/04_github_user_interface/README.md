# Github User Interface

## Context and objectives

In the previous exercise you created a `GithubClient` class. Now it is time to use it with a friendly user interface.

## Specs

For this exercise, you will need the Github client you coded in the previous exercise. Copy / paste it in the `src/github-client.ts` file.

Look at the `src/index.ts` file. You have the start of the interface. What you have to do is to make it work.
When you use `yarn start` you must have something like this in your terminal:

```bash
# with existing nickname
Github nickname
> fewlinesco
1 - bamboo_smtp
# [...] some other repositories
Choose a repo number
> 1
Repository:          bamboo_smtp
Description:         An SMTP adapter for Bamboo.
Subscribers count:   6
Stars count:         93
Language:            Elixir
Url:                 https://api.github.com/repos/fewlinesco/bamboo_smtp
```

```bash
# with no existing nickname
Github nickname
> fakeGHNickname
This User doesn't exist
```

For this to happen you must use what you learned about promises today: chaining `.then` and `.catch`.

## Tests
The only valid test for this exercise is to make it work smoothely and with no failure!

Nonetheless, you can still run `yarn start` but it will only test you Github client exactly the same way it did in the previous exercise.
