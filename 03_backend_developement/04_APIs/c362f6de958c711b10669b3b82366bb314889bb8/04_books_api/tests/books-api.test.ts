// @ts-nocheck
jest.mock("request")
const request = require("request")
import { startServer } from "../src/server"
import { BookRepository } from "../src/repositories/BookRepository"
import { AuthorRepository } from "../src/repositories/AuthorRepository"
import { UserRepository } from "../src/repositories/UserRepository"
const data = require("../src/data/library.json")

const mockedRequest = (request, callback) =>{
  callback(null, {}, JSON.stringify({}))
}

describe("Book API", () => {
  let server
  let bookRepository
  let authorRepository
  let userRepository

  beforeAll(async () => {
    process.env.PORT = "7654"
    process.env.BASE_URL = `http://localhost:${process.env.PORT}`
    server = await startServer(data)
  })

  afterAll(async () => {
    await server.close()
  })

  beforeEach(() => {
    const trueRequest = jest.requireActual("request")
    request.mockImplementation(trueRequest)
  })

  describe("=> Book Repository", () => {
    beforeAll(() => {
      bookRepository = new BookRepository()
    })

    describe("#getAll", () => {
      it("Must use 'request' package with the right url", (done) => {
        request.mockReset()
        request.mockImplementationOnce(mockedRequest)
        
        bookRepository.getAll(() => { done() })

        expect(request.mock.calls[0][0].url).toBe(`${process.env.BASE_URL}/books`)
        expect(request.mock.calls[0][0].method).toBe("GET")
        expect(request).toHaveBeenCalled()
      })
      
      it("Takes a callback function as parameter", () => {
        expect.assertions(1)

        expect(bookRepository.getAll.length).toBe(1)
      })

      it("Sends a `books` array to the callback", async (done) => {
        expect.assertions(2)

        bookRepository.getAll((books) => {
          expect(Array.isArray(books)).toBe(true)
          expect(Object.keys(books[0])).toEqual(["id", "name", "year", "authorId"])
          done()
        })
      })
    })

    describe("#getOne", () => {
      it("Must use 'request' package with the right url", (done) => {
        request.mockReset()
        request.mockImplementationOnce(mockedRequest)
        const id = 1
        
        bookRepository.getOne(id, () => { done() })

        expect(request.mock.calls[0][0].url).toBe(`${process.env.BASE_URL}/books/${1}`)
        expect(request.mock.calls[0][0].method).toBe("GET")
        expect(request).toHaveBeenCalled()
      })
      
      it("Takes an id and a callback function as parameter", () => {
        expect.assertions(1)

        expect(bookRepository.getOne.length).toBe(2)
      })

      it("Sends a `book` object to the callback", async (done) => {
        expect.assertions(2)

        bookRepository.getOne(1, (book) => {
          expect(typeof book).toBe("object")
          expect(Object.keys(book)).toEqual(["id", "name", "year", "authorId"])
          done()
        })
      })
    })

    describe("#getBookComments", () => {
      it("Must use 'request' package with the right url", (done) => {
        request.mockReset()
        request.mockImplementationOnce(mockedRequest)
        const id = 2
        
        bookRepository.getBookComments(id, () => { done() })

        expect(request.mock.calls[0][0].url).toBe(`${process.env.BASE_URL}/books/${id}/comments`)
        expect(request.mock.calls[0][0].method).toBe("GET")
        expect(request).toHaveBeenCalled()
      })
      
      it("Takes an id and a callback function as parameter", () => {
        expect.assertions(1)

        expect(bookRepository.getBookComments.length).toBe(2)
      })

      it("Sends a `comments` array to the callback", async (done) => {
        expect.assertions(2)

        bookRepository.getBookComments(2, (comments) => {
          expect(Array.isArray(comments)).toBe(true)
          const keys = [
            "id",
            "bookId",
            "userId",
            "title",
            "content"
          ]
          expect(Object.keys(comments[0])).toEqual(keys)
          done()
        })
      })
    })

    describe("#searchByTitle", () => {
      it("Must use 'request' package with the right url", (done) => {
        request.mockReset()
        request.mockImplementationOnce(mockedRequest)
        const term = "assassin"
        
        bookRepository.searchByTitle(term, () => { done() })

        expect(request.mock.calls[0][0].url).toBe(`${process.env.BASE_URL}/books?q=${term}`)
        expect(request.mock.calls[0][0].method).toBe("GET")
        expect(request).toHaveBeenCalled()
      })
      
      it("Takes an string and a callback function as parameter", () => {
        expect.assertions(1)

        expect(bookRepository.searchByTitle.length).toBe(2)
      })

      it("Sends a `books` array to the callback", async (done) => {
        expect.assertions(2)

        bookRepository.searchByTitle(2, (books) => {
          expect(Array.isArray(books)).toBe(true)
          expect(Object.keys(books[0])).toEqual(["id", "name", "year", "authorId"])
          done()
        })
      })
    })

    test("Must have all required functions", () => {
      expect.assertions(4)
      expect(typeof bookRepository.getAll).toBe("function")
      expect(typeof bookRepository.getOne).toBe("function")
      expect(typeof bookRepository.getBookComments).toBe("function")
      expect(typeof bookRepository.searchByTitle).toBe("function")
    })
  })

  describe("=> Author Repository", () => {
    beforeAll(() => {
      authorRepository = new AuthorRepository()
    })

    describe("#getAll", () => {
      it("Must use 'request' package with the right url", (done) => {
        request.mockReset()
        request.mockImplementationOnce(mockedRequest)
        
        authorRepository.getAll(() => { done() })

        expect(request.mock.calls[0][0].url).toBe(`${process.env.BASE_URL}/authors`)
        expect(request.mock.calls[0][0].method).toBe("GET")
        expect(request).toHaveBeenCalled()
      })
      
      it("Takes a callback function as parameter", () => {
        expect.assertions(1)

        expect(authorRepository.getAll.length).toBe(1)
      })

      it("Sends a `authors` array to the callback", async (done) => {
        expect.assertions(2)

        authorRepository.getAll((authors) => {
          expect(Array.isArray(authors)).toBe(true)
          expect(Object.keys(authors[0]).sort()).toEqual(["id", "name"].sort())
          done()
        })
      })
    })

    describe("#getOne", () => {
      it("Must use 'request' package with the right url", (done) => {
        request.mockReset()
        request.mockImplementationOnce(mockedRequest)
        const id = 1
        
        authorRepository.getOne(id, () => { done() })

        expect(request.mock.calls[0][0].url).toBe(`${process.env.BASE_URL}/authors/${id}`)
        expect(request.mock.calls[0][0].method).toBe("GET")
        expect(request).toHaveBeenCalled()
      })
      
      it("Takes an id and a callback function as parameter", () => {
        expect.assertions(1)

        expect(authorRepository.getOne.length).toBe(2)
      })

      it("Sends a `author` object to the callback", async (done) => {
        expect.assertions(2)

        authorRepository.getOne(1, (book) => {
          expect(typeof book).toBe("object")
          expect(Object.keys(book).sort()).toEqual(["id", "name"].sort())
          done()
        })
      })
    })

    describe("#getAuthorBooks", () => {
      it("Must use 'request' package with the right url", (done) => {
        request.mockReset()
        request.mockImplementationOnce(mockedRequest)
        const id = 2
        
        authorRepository.getAuthorBooks(id, () => { done() })

        expect(request.mock.calls[0][0].url).toBe(`${process.env.BASE_URL}/authors/${id}/books`)
        expect(request.mock.calls[0][0].method).toBe("GET")
        expect(request).toHaveBeenCalled()
      })
      
      it("Takes an id and a callback function as parameter", () => {
        expect.assertions(1)

        expect(authorRepository.getAuthorBooks.length).toBe(2)
      })

      it("Sends a `books` array to the callback", async (done) => {
        expect.assertions(2)

        authorRepository.getAuthorBooks(2, (books) => {
          expect(Array.isArray(books)).toBe(true)
          const keys = [
            "id",
            "name",
            "year",
            "authorId"
          ].sort()
          expect(Object.keys(books[0]).sort()).toEqual(keys)
          done()
        })
      })
    })

    describe("#searchByName", () => {
      it("Must use 'request' package with the right url", (done) => {
        request.mockReset()
        request.mockImplementationOnce(mockedRequest)
        const term = "king"
        
        authorRepository.searchByName(term, () => { done() })

        expect(request.mock.calls[0][0].url).toBe(`${process.env.BASE_URL}/authors?q=${term}`)
        expect(request.mock.calls[0][0].method).toBe("GET")
        expect(request).toHaveBeenCalled()
      })
      
      it("Takes an string and a callback function as parameter", () => {
        expect.assertions(1)

        expect(authorRepository.searchByName.length).toBe(2)
      })

      it("Sends a `authors` array to the callback", async (done) => {
        expect.assertions(2)

        authorRepository.searchByName("king", (authors) => {
          expect(Array.isArray(authors)).toBe(true)
          expect(Object.keys(authors[0]).sort()).toEqual(["id", "name"].sort())
          done()
        })
      })
    })

    test("Must have all required functions", () => {
      expect.assertions(4)
      expect(typeof authorRepository.getAll).toBe("function")
      expect(typeof authorRepository.getOne).toBe("function")
      expect(typeof authorRepository.getAuthorBooks).toBe("function")
      expect(typeof authorRepository.searchByName).toBe("function")
    })
  })

  describe("=> User Repository", () => {
    beforeAll(() => {
      userRepository = new UserRepository()
    })

    describe("#getAll", () => {
      it("Must use 'request' package with the right url", (done) => {
        request.mockReset()
        request.mockImplementationOnce(mockedRequest)
        
        userRepository.getAll(() => { done() })

        expect(request.mock.calls[0][0].url).toBe(`${process.env.BASE_URL}/users`)
        expect(request.mock.calls[0][0].method).toBe("GET")
        expect(request).toHaveBeenCalled()
      })
      
      it("Takes a callback function as parameter", () => {
        expect.assertions(1)

        expect(userRepository.getAll.length).toBe(1)
      })

      it("Sends a `users` array to the callback", async (done) => {
        expect.assertions(2)

        userRepository.getAll((users) => {
          expect(Array.isArray(users)).toBe(true)
          expect(Object.keys(users[0]).sort()).toEqual(["id", "name"].sort())
          done()
        })
      })
    })

    describe("#getOne", () => {
      it("Must use 'request' package with the right url", (done) => {
        request.mockReset()
        request.mockImplementationOnce(mockedRequest)
        const id = 1
        
        userRepository.getOne(id, () => { done() })

        expect(request.mock.calls[0][0].url).toBe(`${process.env.BASE_URL}/users/${id}`)
        expect(request.mock.calls[0][0].method).toBe("GET")
        expect(request).toHaveBeenCalled()
      })
      
      it("Takes an id and a callback function as parameter", () => {
        expect.assertions(1)

        expect(userRepository.getOne.length).toBe(2)
      })

      it("Sends a `user` object to the callback", async (done) => {
        expect.assertions(2)

        userRepository.getOne(1, (user) => {
          expect(typeof user).toBe("object")
          expect(Object.keys(user).sort()).toEqual(["id", "name"].sort())
          done()
        })
      })
    })

    describe("#getUserComments", () => {
      it("Must use 'request' package with the right url", (done) => {
        request.mockReset()
        request.mockImplementationOnce(mockedRequest)
        const id = 2
        
        userRepository.getUserComments(id, () => { done() })

        expect(request.mock.calls[0][0].url).toBe(`${process.env.BASE_URL}/users/${id}/comments`)
        expect(request.mock.calls[0][0].method).toBe("GET")
        expect(request).toHaveBeenCalled()
      })
      
      it("Takes an id and a callback function as parameter", () => {
        expect.assertions(1)

        expect(userRepository.getUserComments.length).toBe(2)
      })

      it("Sends a `comments` array to the callback", async (done) => {
        expect.assertions(2)

        userRepository.getUserComments(2, (comments) => {
          expect(Array.isArray(comments)).toBe(true)
          const keys = [
            "id",
            "bookId",
            "userId",
            "title",
            "content"
          ].sort()
          expect(Object.keys(comments[0]).sort()).toEqual(keys.sort())
          done()
        })
      })
    })

    describe("#create", () => {
      it("Must use 'request' package with the right url", (done) => {
        expect.assertions(5)

        request.mockReset()
        request.mockImplementationOnce(mockedRequest)
        
        const params = { name: "Elton John"}
        userRepository.create(params, () => { done() })
        
        expect(request).toHaveBeenCalled()
        expect(request.mock.calls[0][0].url).toBe(`${process.env.BASE_URL}/users`)
        expect(request.mock.calls[0][0].headers).toEqual({ 'Content-Type': 'application/json' })
        expect(request.mock.calls[0][0].method).toBe("POST")
        expect(request.mock.calls[0][0].body).toBe(`{"name":"${params.name}"}`)
      })
      
      it("Takes a params object and callback function parameters", () => {
        expect.assertions(1)

        expect(userRepository.create.length).toBe(2)
      })

      it("Sends the created `user` to the callback", async (done) => {
        expect.assertions(2)

        const params = { name: "Elton John"}

        userRepository.create(params, (user) => {
          expect(typeof user).toBe("object")
          const keys = [
            "id",
            "name"
          ].sort()
          expect(Object.keys(user).sort()).toEqual(keys.sort())
          done()
        })
      })
    })

    describe("#update", () => {
      it("Must use 'request' package with the right url", (done) => {
        expect.assertions(5)

        request.mockReset()
        request.mockImplementationOnce(mockedRequest)
        
        const id = 1
        const params = { name: "Booba"}
        userRepository.update(id, params, () => { done() })
        
        expect(request).toHaveBeenCalled()
        expect(request.mock.calls[0][0].url).toBe(`${process.env.BASE_URL}/users/${1}`)
        expect(request.mock.calls[0][0].headers).toEqual({ 'Content-Type': 'application/json' })
        expect(request.mock.calls[0][0].method).toBe("PATCH")
        expect(request.mock.calls[0][0].body).toBe(`{"name":"${params.name}"}`)
      })
      
      it("Takes an id, a params object and callback function parameters", () => {
        expect.assertions(1)

        expect(userRepository.update.length).toBe(3)
      })

      it("Sends the updated `user` to the callback", async (done) => {
        expect.assertions(2)

        const id = 1
        const params = { name: "Booba"}
        userRepository.update(id, params, (user) => {
          expect(typeof user).toBe("object")
          const keys = [
            "id",
            "name"
          ].sort()
          expect(Object.keys(user).sort()).toEqual(keys.sort())
          done()
        })
      })
    })

    describe("#delete", () => {
      it("Must use 'request' package with the right url", (done) => {
        expect.assertions(3)

        request.mockReset()
        request.mockImplementationOnce(mockedRequest)
        
        const id = 1
        userRepository.delete(id, () => { done() })
        
        expect(request).toHaveBeenCalled()
        expect(request.mock.calls[0][0].url).toBe(`${process.env.BASE_URL}/users/${1}`)
        expect(request.mock.calls[0][0].method).toBe("DELETE")
      })
      
      it("Takes an id and a callback function as parameters", () => {
        expect.assertions(1)

        expect(userRepository.delete.length).toBe(2)
      })

      it("Sends the deleted `user` to the callback", async (done) => {
        expect.assertions(2)

        const id = 1
        userRepository.delete(id, (user) => {
          expect(typeof user).toBe("object")
          expect(user).toEqual({})
          done()
        })
      })
    })

    

    test("Must have all required functions", () => {
      expect.assertions(6)
      expect(typeof userRepository.getAll).toBe("function")
      expect(typeof userRepository.getOne).toBe("function")
      expect(typeof userRepository.getUserComments).toBe("function")
      expect(typeof userRepository.create).toBe("function")
      expect(typeof userRepository.update).toBe("function")
      expect(typeof userRepository.delete).toBe("function")
    })
  })
})
