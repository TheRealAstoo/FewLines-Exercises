import fetch, { Response } from "node-fetch";

function getCategories(): Promise<void> {
  return fetch(`https://api.chucknorris.io/jokes/categories`, {
    method: "GET",
  })
    .then((response) => {
      console.log(`${response.body}`);
    })
    .catch((error) => {
      console.warn(error);
    });
}

function getChuckNorrisJoke(category: string): Promise<void> {
  return fetch(`https://api.chucknorris.io/jokes/random?category=${category}`, {
    method: "GET",
  })
    .then((response) => {
      console.log(`${response.body}`);
    })
    .catch((error) => {
      console.warn(error);
    });
}

// Leave the line below for tests to work properly
export { getCategories, getChuckNorrisJoke };
