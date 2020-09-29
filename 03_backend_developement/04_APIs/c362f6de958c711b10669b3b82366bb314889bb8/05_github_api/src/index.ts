// Don't change code in this file

import { getProjectInformations } from "./getProjectInformations"
import { getRepos } from "./getRepos"
import { getReposUrl } from "./getReposUrl"
import { ProjectInformations } from "./types";
import * as readline from "readline";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function drawLine(): void { console.log("**************************************") }

function restart(error?: Error): void {
  if (error) { console.log(error.message) }
  drawLine()
  githubExercise()
}

function printProjectInformations(name: string, infos: ProjectInformations): void {
  const cleanName = name.replace(/\w*\//, "")
  console.log(`Repository:          ${cleanName}`)
  console.log(`Description:         ${infos.description ? infos.description : "No description available"}`)
  console.log(`Subscribers count:   ${infos.subscribers_count}`)
  console.log(`Stars count:         ${infos.stargazers_count}`)
  console.log(`Language:            ${infos.language}`)
  console.log(`Git url:             ${infos.git_url}`)
}

function githubExercise(): void {
  reader.question("Enter a github username\n> ", (githubUsername) => {
    drawLine()
    getReposUrl(githubUsername, (error, url) => {
      if (error) {
        restart(error)
      } else if (url) {
        getRepos(url, (error, repos) => {
          if (error) {
            restart(error)
          } else if (repos && repos.length > 0) {
            repos.forEach((repo, i) => {
              if (repo && repo.name) {
                console.log(`${i + 1} - ${repo.name.replace(/\w*\//, "")}`)
              }
            });
            drawLine()
            reader.question("Select a repo\n> ", (repoIndex) => {
              drawLine()
              const index = parseInt(repoIndex) - 1
              const selectedRepository = repos[index]
              if (selectedRepository) {
                getProjectInformations(selectedRepository.url,
                  (error, repoInformations) => {
                    if (error) {
                      restart(error)
                    } else if (repoInformations) {
                      printProjectInformations(
                        selectedRepository.name,
                        repoInformations
                      )
                      drawLine()
                      reader.question("Do you want to continue? (Y/n)\n> ", (input) => {
                        if (input === "n") {
                          console.log("\nSee you later!\n")
                          reader.close()
                        } else {
                          githubExercise()
                        }
                      })
                    }
                  }
                )
              }
            })
          }
        })    
      }
    })
  })  
}

githubExercise()
