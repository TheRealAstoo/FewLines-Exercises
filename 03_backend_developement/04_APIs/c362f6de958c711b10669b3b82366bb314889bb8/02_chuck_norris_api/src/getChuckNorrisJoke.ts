import * as request from "request"

function getChuckNorrisJoke(selectedCategory: string): void {
  request(`https://api.chucknorris.io/jokes/random?category=${selectedCategory}`, (error, response, body) => {
    if (error) {
      console.error()
    } else {
      const bodyParsed = JSON.parse(body)
      console.log(bodyParsed.value)
    }
  })
}

// leave line below for tests to work properly
export { getChuckNorrisJoke }
