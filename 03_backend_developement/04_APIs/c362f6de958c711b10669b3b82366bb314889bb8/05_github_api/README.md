# Github Api

## Context and objectives

Now that you're familiar with [Github](https://github.com/), let's use its API to retrieve informations about repositories.

In this exercise you have a user interface provided for you in `index.ts` file.
The goal is to code the needed functions for this CLI to work as intended:

```bash
# with existing nickname
Enter a github username
> request
**************************************
# [some other repos]
22 - request
# [some other repos]
**************************************
Select a repo
> 22
**************************************
Repository:          request
Description:         🏊🏾 Simplified HTTP request client.
Subscribers count:   452
Stars count:         24379
Language:            JavaScript
Git url:             git://github.com/request/request.git
```

```bash
# with no existing nickname
Enter a github username
> fakeGHNickname
**************************************
No user found
**************************************
Enter a github username
>
```

You can try it anytime you want with: `yarn start`.

**Spoiler**: It will fail until you wrote all needed functions!

## Specs

The interface is given to save you from 🔥Callbacks Hell🔥 but take some time to read it in `src/index.ts`, it will help you to write code in functions.

### General informations:

Github API doesn't allow calls with no `user-agent` headers.

```
// Header needed by the request function
{
  'User-Agent': 'request'
}
```
See in the request documentation how to use it: https://github.com/request/request.

### `getReposUrl`

This function takes two parameters:
- `githubNickname`: the nickname the user want to search for.
- `callback`: the callback function (you don't need to code this one!).

It must use the url to call the github Api and retrieve a user's profile. Take a look at the documentation here: https://developer.github.com/v3/users/

You have to use the request package to make the API call.
Feel free to test with `cURL` or `Postman` first.

When you'll get a response from the API, give the `repos_url` to your callback function.

⚠️ Don't forget to handle the response when the Github username doesn't exist.

### `getRepos`

- `url`: the URL of the github user's repositories.
- `callback`: the callback function (you don't need to code this one!).

When you manage to retrieve the `repos_url` with `getReposUrl()`, use it in `getRepos` to get an array with the profile's repositories.

Look at the API documentation again to know which url to call: https://developer.github.com/v3/repos/#list-repositories-for-a-user

This will allow the `src/index.ts`'s interface to present it to your users for them to select a specific repository.

⚠️ Again, don't forget to handle the response when the url doesn't exist.

### `getProjectInformations`
- `url`: the URL of the repository choosed by your user.
- `callback`: the callback function (you don't need to code this one!).

This function must get informations from a single repository with the url given as an argument.

Look at the API documentation here: https://developer.github.com/v3/repos/#get-a-repository

The function must send a filtered list of informations to the callback. We only need:
- `description`: the description of the repo.
- `language`: most used language of the repo.
- `subscribers_count`: number of user following the repo.
- `stargazers_count`: number of earned stars.
- `git_url`: the git url which you can use to clone the repo.

⚠️ Aaaaaaaaand one last time: don't forget to handle the response when the url doesn't exist.
