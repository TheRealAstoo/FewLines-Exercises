import { OrangeTree } from "../OrangeTree"

describe("OrangeTree life", () => {
  test("isAlive: a new tree should be alive", () => {
    expect.assertions(1);
  });

  test("isAlive: a tree should not die before 50 years old", () => {
    // For this test, we want to check what happens if we create a tree of 1 year old that 
    // we grow until 50 years old in a loop.
    // We know that the death occur with a call to `Math.random` so we need to mock its result to always return 0:
    // That way, we make sure that if it could die, it would.
    // Replace `isAlive()` by a function that returns `true` if `this.age > 30` (for instance) and this test should fail
    expect.assertions(1);

    const tree = new OrangeTree(40)

    const spy = jest.spyOn(Math, "random");
    spy.mockImplementation(() => 0);

    tree.isAlive(chanceToDie = 0);

    expect(tree.isAlive).toBe(false);

    spy.mockRestore();
  });

  test("isAlive: a tree should be dead before 101 years old", () => {
    // For this test, we want to check what happens if we create a tree of 1 year old that 
    // we grow until 101 years old in a loop.
    // At the end, we should be sure that the tree is dead.
    expect.assertions(1);
  });
});

describe("OrangeTree oranges", () => {
  test("pickAnOrange: we should not be able to pick oranges from a newly seeded tree", () => {
    // For this tests, `pickAnOrange` does not return anything but is using console.log, so don't forget to mock
    // and to call `mockRestore()` on your mock at the end of the test.
    expect.assertions(1);
  });

  test("pickAnOrange: we should be able to 10 oranges from a tree that starts at 4 years old that age one year", () => {
    // After picking an orange, we can check that the length of our `tree.oranges` array is only 9, that would mean we picked one.
    expect.assertions(2);
  });

  test("pickAnOrange: we should be able to 20 oranges from a tree that starts at 10 years old that age one year", () => {
    // After picking an orange, we can check that the length of our `tree.oranges` array is only 19, that would mean we picked one
    expect.assertions(2);
  });
});
