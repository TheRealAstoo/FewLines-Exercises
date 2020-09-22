const basicFs = require("../src/basicFs.js")
const fs = require("fs")

const createTestFile = () => {
  try {
    fs.openSync("./tests/testFile", "w");
    return true;
  } catch(e) {
    return false;
  }
}

const deleteTestFile = (fileName = "testFile") => fs.unlinkSync(`./tests/${fileName}`)

const testFileExists = (fileName = "testFile") => fs.existsSync(`./tests/${fileName}`)

describe("Basic FS", () => {
  describe("#pwd", () => {
    it("Should be exported.", () => {
      expect(basicFs.pwd).toBeInstanceOf(Function)
    })

    it("Should return the current path", () => {
      expect(basicFs.pwd()).toMatch(process.cwd())
    })
  })

  describe("#touch", () => {
    it("Should be exported" , () => {
      expect(basicFs.touch).toBeInstanceOf(Function)
    })

    it("Should create a file", (done) => {
      basicFs.touch("./tests/testFile")

      setTimeout(() => {
        const fileCreated = testFileExists()

        expect(fileCreated).toBe(true)
        
        deleteTestFile()
        done()
      }, 500)
    })
  })

  describe("#deleteFile", () => {
    it("Should be exported" , () => {
      expect(basicFs.deleteFile).toBeInstanceOf(Function)
    })

    it("Should delete a file", (done) => {
      createTestFile()
      basicFs.deleteFile("./tests/testFile")

      setTimeout(() => {
        const fileDeleted = !testFileExists()

        expect(fileDeleted).toBe(true)
        

        if (!fileDeleted) {
          deleteTestFile()
        }
        done()
      }, 500)
    })
  })

  describe("#copyPaste", () => {
    it("Should be exported", () => {
      expect(basicFs.copyPaste).toBeInstanceOf(Function)
    })

    it("Should copy and paste a file", (done) => {
      createTestFile()
      basicFs.copyPaste("./tests/testFile", "./tests/testFile2")

      setTimeout(() => {
        const initialFileExists = testFileExists()
        const copiedFileExists = testFileExists("testFile2")

        expect(initialFileExists).toBe(true)
        expect(copiedFileExists).toBe(true)
        

        if (initialFileExists) {
          deleteTestFile()
        }
        if (copiedFileExists) {
          deleteTestFile("testFile2")
        }
        done()
      }, 500)
    })
  })

  describe("#cutPaste", () => {
    it("Should be exported", () => {
      expect(basicFs.copyPaste).toBeInstanceOf(Function)
    })

    it("Should cut and paste a file", (done) => {
      createTestFile()
      basicFs.cutPaste("./tests/testFile", "./tests/testFile2")

      setTimeout(() => {
        const initialFileExists = testFileExists()
        const cutFileExists = testFileExists("testFile2")
        
        expect(initialFileExists).toBe(false)
        expect(cutFileExists).toBe(true)
        

        if (initialFileExists) {
          deleteTestFile()
        }
        if (cutFileExists) {
          deleteTestFile("testFile2")
        }
        done()
      }, 500)
    })
  })
})

