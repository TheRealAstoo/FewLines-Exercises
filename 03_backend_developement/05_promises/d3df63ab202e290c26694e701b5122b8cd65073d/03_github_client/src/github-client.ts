import fetch, { Response, FetchError } from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string |number |boolean |null;
}

export class GithubClient {
  static getReposUrl(nickname: string): Promise<string> {
    return fetch(`https://api.github.com/users/${nickname}/repos`, {
      method: "GET"
    })
    .then((response: Response) => { return response.json()})
    .then((response) => {
      if (response.message === "Not Found") {
        throw new Error(`The user ${nickname} doesn't exist`);
      }
      return response.repos_url
    })
  }

  static getRepos() {
    // You code goes here
  }

  static printRepos() {
    // You code goes here
  }

  
  static printRepository() {
    // You code goes here
  }
  
  static getProjectInformations() {
    // You code goes here
  }
}
