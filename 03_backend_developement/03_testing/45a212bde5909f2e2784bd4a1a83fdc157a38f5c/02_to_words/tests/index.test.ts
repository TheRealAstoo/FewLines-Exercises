import { toWords } from "../src/index"

describe("Change Words in array", () => {
  test("Put all the words in an array", () => {
    expect.assertions(1);
    
    const result = toWords("Lorem ipsum dolor sit amet, consectetu")

    expect(result).toEqual([ 'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetu' ])
  });

  test("Remove empty words", () => {
    expect.assertions(1);
    
    const result = toWords("Lorem ipsum dolor sit amet, consectetu,      ,    ")

    expect(result).toEqual(["Lorem", "ipsum", "dolor", "sit", "amet", "consectetu"])
  });
})
