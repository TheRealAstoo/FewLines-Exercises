import ask from "./lib/ask";
import { closeRl } from "./lib/reader";
import { GithubClient, Repo } from "./github-client"

ask("Github nickname\n> ")
  .then((nickname) => GithubClient.getReposUrl(nickname))
  // Continue to chain here
