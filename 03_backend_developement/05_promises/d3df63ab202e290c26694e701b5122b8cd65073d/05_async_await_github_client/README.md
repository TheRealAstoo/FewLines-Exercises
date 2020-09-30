# Github User Interface (Bonus)

## Context and objectives

This morning you saw how to use promises with `.then` and `.catch` but it's not the only way.
There is also the `async`/`await` way!

Learn about it by reading this [documentation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await).

## Specs

In this exercise you have to redo the Github client AND the interface without using `.then` or `.catch` anywhere!

### `getReposUrl`

- Must take a `nickname` string parameter: this is the user we want to search for.
- Must use the `fetch` package to make the API call.
- Must return a `string`: the url of the requested user's repositories.
- Must throw an understandable error when the user does not exist.

### `getRepos`

- Must take a `url` string parameter.
- Must use the `fetch` package to make the API call to the `url` given as argument.
- Must return an array of repositories.

### `getProjectInformations`

- Must take a `url` string parameter.
- Must use the `fetch` package to make the API call to the `url` given as argument.
- Must return the repository's data.

Same as before, code your client in `src/github-client.ts` and your interface in `src/index.ts`.

## Tests

To test the client, run `yarn test`. It will fail if you're using `.then` or `.catch`.

Like in the previous exercise, no tests are provided for the user interface. Just make it work when you use `yarn start`.
