// @ts-nocheck
jest.mock("request")
import { getReposUrl } from "../src/getReposUrl"
import { getRepos } from "../src/getRepos"
import { getProjectInformations } from "../src/getProjectInformations"
import * as request from "request"
import { profile, repos, repo, notFound } from "./test-data"

const mockedGhProfileRequest = (request, callback) =>{
  callback(null, {}, JSON.stringify(profile))
}

const mockedRepositoriesRequest = (request, callback) =>{
  callback(null, {}, JSON.stringify(repos))
}

const mockedRepositoryRequest = (request, callback) =>{
  callback(null, {}, JSON.stringify(repo))
}

const mockedNotFoundRequest = (request, callback) =>{
  callback(null, { statusCode: 404 }, JSON.stringify(notFound))
}

const mockedErrorRequest = (request, callback) =>{
  callback({message: "An error occured"}, {}, null)
}

describe("getReposUrl function", () => {
  afterAll(() => {
    request.mockReset()
  })

  it("Must use the Github username paramater to make the api call", (done) => {
    expect.assertions(2)

    request.mockImplementation(() => {})

    getReposUrl("Tata", () => {})
    getReposUrl("Toto", () => {})

    expect(request.mock.calls[0][0].url).toBe("https://api.github.com/users/Tata")
    expect(request.mock.calls[1][0].url).toBe("https://api.github.com/users/Toto")

    done()
  })

  it("Must send a repositories url as an argument to the callback function", (done) => {
    expect.assertions(1)
    
    request.mockImplementation(mockedGhProfileRequest)

    getReposUrl("Meyclem", (error, url) => {
      expect(url).toBe("https://api.github.com/users/Meyclem/repos")
    })

    done()
  })

  it("Must handle errors by sending an 'object' with 'message' key to the callback function as first argument", (done) => {
    expect.assertions(4)
    
    request.mockImplementation(mockedNotFoundRequest)

    getReposUrl("Meyclem", (error, url) => {
      expect(error).not.toBe(null)
      expect(error.message).not.toBe(null)
    })

    request.mockImplementation(mockedErrorRequest)

    getReposUrl("Meyclem", (error, url) => {
      expect(error).not.toBe(null)
      expect(error.message).not.toBe(null)
    })

    done()
  })
})

describe("getRepos function", () => {
  afterAll(() => {
    request.mockReset()
  })

  it("Must use the url paramater to make the api call", (done) => {
    expect.assertions(1)

    request.mockImplementation(() => {})

    const url = "https://any-url.com"

    getRepos(url, () => {})

    expect(request.mock.calls[0][0].url).toBe(url)

    done()
  })

  it("Must send an array as an argument to the callback function", (done) => {
    expect.assertions(1)

    request.mockImplementation(mockedRepositoriesRequest)
    
    const url = "https://api.github.com/users/Meyclem/repos"

    getRepos(url, (error, list) => {
      expect(Array.isArray(list)).toBe(true)
    })

    done()
  })

  it("Must send an array of objects with keys 'name' and 'url' to the callback function", (done) => {
    expect.assertions(1)

    request.mockImplementation(mockedRepositoriesRequest)
    
    const url = "https://api.github.com/users/Meyclem/repos"

    getRepos(url, (error, list) => {
      expect(Object.keys(list[0])).toEqual(['name', 'url'])
    })

    done()
  })

  it("Must handle errors by sending an 'object' with 'message' key to the callback function as first argument", (done) => {
    expect.assertions(4)
    
    request.mockImplementation(mockedNotFoundRequest)

    getRepos("https://any-url.com", (error, url) => {
      expect(error).not.toBe(null)
      expect(error.message).not.toBe(null)
    })

    request.mockImplementation(mockedErrorRequest)

    getRepos("https://any-url.com", (error, url) => {
      expect(error).not.toBe(null)
      expect(error.message).not.toBe(null)
    })

    done()
  })
})

describe("getProjectInformations function", () => {
  afterAll(() => {
    request.mockReset()
  })

  it("Must use the given url parameters to make the api call", (done) => {
    expect.assertions(1)

    request.mockImplementation(mockedRepositoryRequest)
    
    const url = "https://api.github.com/repos/Meyclem/road-rush"

    getProjectInformations(url, (error, infos) => {
      expect(request.mock.calls[0][0].url).toBe(url)
    })

    done()
  })

  it("Must parse the result to an object and pass it to the callback function", (done) => {
    expect.assertions(1)

    request.mockImplementation(mockedRepositoryRequest)
    
    const url = "https://api.github.com/repos/Meyclem/road-rush"

    getProjectInformations(url, (error, infos) => {
      expect(typeof infos).toBe('object')
    })

    done()
  })

  it("Must send only required informations to the callback function", (done) => {
    expect.assertions(1)

    request.mockImplementation(mockedRepositoryRequest)
    
    const url = "https://api.github.com/repos/Meyclem/road-rush"

    getProjectInformations(url, (error, infos) => {
      const requiredKeys = [
        "description",
        "language",
        "subscribers_count",
        "stargazers_count",
        "git_url",
      ]
      expect(Object.keys(infos).sort()).toEqual(requiredKeys.sort())
    })

    done()
  })

  it("Must handle errors by sending an 'object' with 'message' key to the callback function as first argument", (done) => {
    expect.assertions(4)
    
    request.mockImplementation(mockedNotFoundRequest)

    getProjectInformations("https://any-url.com", (error, url) => {
      expect(error).not.toBe(null)
      expect(error.message).not.toBe(null)
    })

    request.mockImplementation(mockedErrorRequest)

    getProjectInformations("https://any-url.com", (error, url) => {
      expect(error).not.toBe(null)
      expect(error.message).not.toBe(null)
    })

    done()
  })
})
