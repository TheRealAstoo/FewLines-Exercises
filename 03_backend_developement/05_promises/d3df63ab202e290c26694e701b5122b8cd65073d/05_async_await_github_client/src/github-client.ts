import fetch from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string |number |boolean |null;
}

export class GithubClient {
  static async getReposUrl() {
    // You code goes here
  }

  static async getRepos() {
    // You code goes here
  }
  
  static async getProjectInformations() {
    // You code goes here
  }

  static printRepos(repos: Repo[]): Repo[] {
    repos.forEach((repo, index) => {
      const repoNumber = (index + 1).toString().padStart(3, " ")
      console.log(`${repoNumber} - ${repo.name}`)
    })
    return repos
  }

  static printRepository(repo: Repo): void {
    const cleanName = repo.name.replace(/\w*\//, "")
    console.log(`Repository:          ${cleanName}`)
    console.log(`Description:         ${repo.description ? repo.description : "No description available"}`)
    console.log(`Subscribers count:   ${repo.subscribers_count}`)
    console.log(`Stars count:         ${repo.stargazers_count}`)
    console.log(`Language:            ${repo.language}`)
    console.log(`Url:                 ${repo.url}`)
  }
}
