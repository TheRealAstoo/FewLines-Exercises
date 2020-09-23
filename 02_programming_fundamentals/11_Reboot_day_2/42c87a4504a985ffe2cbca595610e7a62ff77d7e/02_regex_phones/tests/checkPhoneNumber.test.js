const checkPhoneNumber = require("../src/checkPhoneNumber")

const testNumbers = [
  { number: "0638132948", expected: true },
  { number: "06 38 13 29 48", expected: true },
  { number: "06-38-13-29-48", expected: true },
  { number: "03-38-13-29-48", expected: true },
  { number: "03.38.13.29.48", expected: true },
  { number: "06 38 13 29", expected: false },
  { number: "06381329", expected: false },
  { number: "00336 38 13 29 48", expected: true },
  { number: "+336 38 13 29 48", expected: true },
]

describe("#CheckPhoneNumber", () => {
  testNumbers.forEach((fakePhone) => {
    it(`Should return ${fakePhone.expected} for ${fakePhone.number}`, () => {
      expect(checkPhoneNumber(fakePhone.number)).toBe(fakePhone.expected)
    })
  })
})
