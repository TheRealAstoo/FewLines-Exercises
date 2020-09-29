# CHUCK FETCH

## CONTEXT AND OBJECTIVES

In this exercice, you'll have to call the Chuck Norris API again but from now on, you must use the `node-fetch` package to make requests instead of `request`, as you saw in the morning lesson.

To do so, read the **[documentation](https://api.chucknorris.io/)** first.

## Specs

Implement the two following functions:
In the `src/chuck.ts` file:

**`getCategories()`**
- Must not use a parameter.
- Call the api categories endpoint with `fetch`.
- Return a promise with an array of strings, those strings being your categories.

**`getChuckNorrisJoke()`**
- Use a `category` parameter, which is a `string` representing the selected category (e.g. `"dev"`, `"animal"`, ...).
- Call the api joke endpoint with `fetch`.
- Return a promise with only a string, this string being the joke.

### Tips

The `src/chuck.ts` contains `import fetch, { Response } from "node-fetch";`.
Use `Response` to type the response `fetch` gives you, as stated in the course.

⚠️⚠️ Don't use `catch` in your functions as we will handle errors in the `src/indext.ts` file. ⚠️⚠️

You can use `yarn test` to help you during the development.
When you're happy with your work, try it with `yarn start`.
