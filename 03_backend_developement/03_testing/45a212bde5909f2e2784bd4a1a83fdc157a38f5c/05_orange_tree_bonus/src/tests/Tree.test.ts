import { Tree } from "../Tree"

describe("Tree", () => {
  test("A 1-year old tree should have an age of 1 and have grown to 25 cm", () => {
    expect.assertions(2);

    const tree = new Tree(1)

    expect(tree.age).toEqual(1);
    expect(tree.height).toEqual(25);
  });

  test("A 5-year old tree should have an age of 5 and have grown to 125 cm", () => {
    expect.assertions(2);

    const tree = new Tree(5)

    expect(tree.age).toEqual(5);
    expect(tree.height).toEqual(125);
  });

  test("A 10-year old tree should have an age of 10 and have grown to 235 cm", () => {
    expect.assertions(2);

    const tree = new Tree(10)

    expect(tree.age).toEqual(10);
    expect(tree.height).toEqual(235);
  });

  test("A 20-year old tree should have an age of 20 and have grown to 335 cm", () => {
    expect.assertions(2);

    const tree = new Tree(20)

    expect(tree.age).toEqual(20);
    expect(tree.height).toEqual(335);
  });

  test("A 50-year old tree should have an age of 50 and have grown to 335 cm", () => {
    expect.assertions(2);

    const tree = new Tree(50)

    expect(tree.age).toEqual(50);
    expect(tree.height).toEqual(335);
  });

  test("A 50-year old tree should be reset if we call the seed method", () => {
    // We want to check that age, height and alive are all in their default value after calling `seed`
    expect.assertions(3);

    const tree = new Tree(50)
    tree.seed()

    expect(tree.age).toEqual(0);
    expect(tree.height).toEqual(0);
    expect(tree.alive).toEqual(true);
  });
});
