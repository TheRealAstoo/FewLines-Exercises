function makeTree(age = 0) {
  const newTree = Object.assign({}, require("../src/orangeTree"));

  for (let i = 0; i < age; i++) {
    newTree.ageOneYear();
  }
  return newTree;
}

describe("Orange tree", () => {
  describe("Oranges:", () => {
    test("should be able to pick an orange when there are some", () => {
      const tree = makeTree();
      tree.oranges = 43;

      expect(tree.pickAnOrange()).toEqual(true);
      expect(tree.oranges).toEqual(42);
      tree.oranges = 43;
    });

    test("should not be able to pick an orange when we just planted the tree", () => {
      const tree = makeTree();

      expect(tree.pickAnOrange()).toEqual(false);
      expect(tree.oranges).toEqual(0);
    });

    it(`should not produce oranges when age < 5`, () => {
      const tree = makeTree();

      for (let age = 1; age < 5; age++) {
        tree.ageOneYear();
        expect(tree.oranges).toEqual(0);
      }
    });

    it(`should produce 10 oranges per year when aged between 5 and 9 included`, () => {
      const tree = makeTree(4);

      for (let age = 5; age < 10; age++) {
        tree.ageOneYear();
        expect(tree.oranges).toEqual(10);
      }
    });

    test(`should produce 20 oranges per year when aged between 10 and 19 included`, () => {
      const tree = makeTree(9);

      for (let age = 10; age < 20; age++) {
        tree.ageOneYear();
        expect(tree.oranges).toEqual(20);
      }
    });

    test(`should produce 5 oranges per year when aged between 20 and 39 included.`, () => {
      const tree = makeTree(19);

      for (let age = 20; age < 40; age++) {
        tree.ageOneYear();
        expect(tree.oranges).toEqual(5);
      }
    });

    test(`should not produce oranges when aged > 40.`, () => {
      const tree = makeTree(39);

      for (let age = 40; age <= 100; age++) {
        tree.ageOneYear();
        expect(tree.oranges).toEqual(0);
      }
    });
  });
  describe("Height:", () => {
    test(`should have grown 25cm per year before 10.`, () => {
      const tree = makeTree();

      for (let age = 1; age < 10; age++) {
        tree.ageOneYear();
        expect(tree.height).toEqual(age * 25);
      }
    });

    test(`should have grown 10cm per year between 10 and 19 included.`, () => {
      const tree = makeTree(9);

      for (let age = 10; age < 20; age++) {
        tree.ageOneYear();
        expect(tree.height).toEqual(9 * 25 + (age - 9) * 10);
      }
    });

    test(`should stop growing after 20 years old`, () => {
      const tree = makeTree(19);

      for (let age = 20; age <= 100; age++) {
        tree.ageOneYear();
        expect(tree.height).toEqual(9 * 25 + 10 * 10);
      }
    });
  });

  describe("Life and death", () => {
    test(`should die before 100 years but after 50 years`, () => {
      const tree = makeTree();

      while (tree.alive && tree.age < 100) {
        tree.ageOneYear();
      }

      expect(tree.alive).toEqual(false);
      expect(tree.age).toBeLessThanOrEqual(100);
      expect(tree.age).toBeGreaterThanOrEqual(50);
    });
  });
});
