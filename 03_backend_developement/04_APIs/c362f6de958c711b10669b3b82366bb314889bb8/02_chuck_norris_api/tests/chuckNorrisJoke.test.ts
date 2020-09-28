// @ts-nocheck

jest.mock("request")
const { getChuckNorrisJoke } = require("../src/getChuckNorrisJoke")
const { getCategories } = require("../src/getCategories")
const request = require("request")

const mockedJokeRequest = (request, callback) =>{
  callback(null, {}, JSON.stringify({
    "value": "When Chuck Norris throws exceptions, it's across the room."
  }))
}

const mockedCategoriesRequest = (request, callback) => {
  callback(null, {}, JSON.stringify(["animal", "dev"]))
}

describe("Chuck Norris API", () => {
  describe("#getCategories", () => {
    afterAll(() => {
      request.mockReset()
    })

    it("Must use 'request' package to get a list of categories", (done) => {
      expect.assertions(2)

      console.log = jest.fn()
      request.mockImplementation(mockedCategoriesRequest)

      getCategories()
      
      expect(request).toHaveBeenCalled()
      expect(request.mock.calls[0][0]).toBe("https://api.chucknorris.io/jokes/categories")

      done()
    })

    it("Throws a 'console.error' when the API respond with error", (done) => {
      console.error = jest.fn()
      expect.assertions(1)
    
    
      request.mockImplementationOnce((request, callback) =>{
        callback(new Error("This is a fake error"), {}, null)
      })
      
      getCategories()

      expect(console.error).toHaveBeenCalled()

      done()
    })

    it("Must not print anything with 'console.log' when an error is throwned", (done) => {
      expect.assertions(2)

      console.log = jest.fn()
      console.error = jest.fn()
      request.mockImplementationOnce((request, callback) =>{
        callback(new Error("This is a fake error"), {}, JSON.stringify({
          "value": "When Chuck Norris throws exceptions, it's across the room."
        }))
      })

      getCategories()

      expect(console.log).not.toHaveBeenCalled()
      expect(request).toHaveBeenCalled()

      done()
    })

    it("Must print a list of categories with 'console.log'", (done) => {
      expect.assertions(2)

      request.mockImplementationOnce(mockedCategoriesRequest)
      console.log = jest.fn().mockImplementation(string => {
        expect(/.*animal.*dev/.exec(string)).toBeTruthy()
      })
    
      getCategories()

      expect(console.log).toHaveBeenCalled()
      console.log.mockClear()

      done()
    })
  })

  describe("#getChuckNorrisJoke", () => {
    afterAll(() => {
      request.mockReset()
    })

    it("Throws a 'console.error' when the API respond with error", (done) => {
      expect.assertions(1)

      console.error = jest.fn()  
      request.mockImplementationOnce((request, callback) =>{
        callback(new Error("This is a fake error"), {}, null)
      })

      getChuckNorrisJoke("dev")

      expect(console.error).toHaveBeenCalled()

      done()
    })

    it("Must not print anything with 'console.log' when an error is throwned", (done) => {
      expect.assertions(2)
      
      request.mockImplementationOnce((request, callback) =>{
        callback(new Error("This is a fake error"), {}, JSON.stringify({
          "value": "When Chuck Norris throws exceptions, it's across the room."
        }))
      })
      console.log = jest.fn()
      console.error = jest.fn()

      getChuckNorrisJoke("dev")

      expect(console.log).not.toHaveBeenCalled()
      expect(request).toHaveBeenCalled()

      done()
    })
    
    it("Must use 'request' package to get a joke", (done) => {
      expect.assertions(2)

      request.mockImplementationOnce(mockedJokeRequest)

      getChuckNorrisJoke("dev")

      expect(request).toHaveBeenCalled()
      expect(request.mock.calls[0][0]).toBe("https://api.chucknorris.io/jokes/random?category=dev")
      
      done()
    })

    it("Must use the category parameter in the API url", (done) => {
      expect.assertions(4)

      request.mockImplementationOnce(mockedJokeRequest)

      getChuckNorrisJoke("dev")

      expect(request).toHaveBeenCalled()
      expect(request.mock.calls[0][0]).toBe("https://api.chucknorris.io/jokes/random?category=dev")

      request.mockClear()

      request.mockImplementationOnce(mockedJokeRequest)

      getChuckNorrisJoke("cat")

      expect(request).toHaveBeenCalled()
      expect(request.mock.calls[0][0]).toBe("https://api.chucknorris.io/jokes/random?category=cat")

      done()
    })

    it("Must print a joke with 'console.log'", (done) => {
      expect.assertions(2)

      request.mockImplementationOnce(mockedJokeRequest)
      console.log = jest.fn().mockImplementation(string => {
        expect(/When Chuck Norris throws exceptions, it's across the room./.exec(string)).toBeTruthy()
      })
    
      getChuckNorrisJoke("dev")

      expect(console.log).toHaveBeenCalled()
      console.log.mockClear()

      done()
    })
  })
})
