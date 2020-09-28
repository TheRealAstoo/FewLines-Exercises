import * as request from "request"

function getCategories(): void {
  request("https://api.chucknorris.io/jokes/categories", (error, response, body) => {
  if (error) {
    console.error()
  } else {
    console.log(body)
  }
})
}

// leave line below for tests to work properly 
export { getCategories }
