import { getChuckNorrisJoke } from "./getChuckNorrisJoke"
import { getCategories } from "./getCategories"
import * as readline from "readline"

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Don't change this code
function chuckNorrisJokes(): void {
  getCategories()
  
  reader.question("\nChoose a category\n> ", (selectedCategory: string) => {
    getChuckNorrisJoke(selectedCategory)
    setTimeout(() => {
      reader.question("Do you want to continue? (Y/n)\n> ", (userInput: string) => {
        if (userInput === 'n') {
          console.log("\nBye!!")
          reader.close()
        } else {
          chuckNorrisJokes()
        }
      })
    }, 3000)
  });
}

// use `yarn start` to start the program
chuckNorrisJokes()
