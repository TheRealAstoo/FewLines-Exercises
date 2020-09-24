// @ts-nocheck
import * as path from "path";

import { readCode } from "./utils/readCode";
import { Tree } from "../src/Tree";
import { OrangeTree } from "../src/OrangeTree";

describe("Tree class", () => {
  class TestTree extends Tree {
    isAlive() {
      const randomNumber = Math.round(Math.random() * 50);

      return randomNumber < this.age - 50 + 1 ? false : true;
    }

    ageOneYear() {
      this.age += 1;

      if (this.age <= 9) {
        this.height += 25;
      } else if (this.age >= 10 && this.age <= 20) {
        this.height += 10;
      }

      this.alive = this.isAlive();
    }
  }

  const tree = new TestTree(1);

  it("should be a class", () => {
    expect.assertions(1);

    expect(tree instanceof Tree).toBe(true);
  });

  describe("class constructor:", () => {
    describe("height computation:", () => {
      it("should have a height of 0 if initialized at 0 years old", () => {
        expect.assertions(1);

        const tree = new TestTree(0);

        expect(tree.height).toEqual(0);
      });

      it("should grow 25 centimeters per year, from 1 to 9 years old (included)", () => {
        expect.assertions(9);

        for (let age = 1; age < 10; age++) {
          const tree = new TestTree(age);

          expect(tree.height).toEqual(age * 25);
        }
      });

      it("should grow 10 centimeters per year, from 10 to 20 years old (included)", () => {
        expect.assertions(11);

        let index = 1;

        for (let age = 10; age <= 20; age++) {
          const tree = new TestTree(age);

          expect(tree.height).toEqual(225 + index * 10);

          index++;
        }
      });

      it("should have reach an height of 335cm after 50 years", () => {
        expect.assertions(1);

        const tree = new TestTree(50);

        expect(tree.height).toEqual(335);
      });

      it("should stop growing after 20 years old", () => {
        expect.assertions(80);

        const tree = new TestTree(20);

        for (let age = 20; age < 100; age++) {
          const previousHeight = tree.height;

          tree.ageOneYear();

          expect(tree.height).toEqual(previousHeight);
        }
      });
    });
  });

  describe("class properties:", () => {
    const testTree = new TestTree(19);

    it("should have a property called age.", () => {
      expect.assertions(2);

      expect(tree.age).toEqual(1);
      expect(testTree.age).toEqual(19);
    });

    it("should have a property called height, that get computed based on its age", () => {
      expect.assertions(2);

      expect(tree.height).toEqual(25);
      expect(testTree.height).toEqual(325);
    });

    it("should have a property called alive, with a default value of `true`.", () => {
      expect.assertions(1);

      expect(tree.alive).toEqual(true);
    });
  });

  describe("class methods:", () => {
    it("should have an abstract method called isAlive.", async (done) => {
      expect.assertions(1);

      const studentCode = await readCode(
        path.resolve(__dirname, "../src/Tree.ts")
      );

      const isMethodAbstract = studentCode.includes(
        "abstract isAlive(): boolean"
      );

      expect(isMethodAbstract).toBe(true);

      done();
    });

    it("should have an abstract method called ageOneYear.", async (done) => {
      expect.assertions(1);

      const studentCode = await readCode(
        path.resolve(__dirname, "../src/Tree.ts")
      );

      const isMethodAbstract = studentCode.includes(
        "abstract ageOneYear(): void"
      );

      expect(isMethodAbstract).toBe(true);

      done();
    });

    it("should have an non-abstract method called seed.", () => {
      expect.assertions(1);

      expect(typeof tree.seed).toBe("function");
    });

    test("the seed method should reset the tree properties.", () => {
      expect.assertions(3);

      tree.alive = false;
      tree.seed();

      expect(tree.age).toEqual(0);
      expect(tree.height).toEqual(0);
      expect(tree.alive).toEqual(true);
    });
  });
});

describe("OrangeTree class:", () => {
  it("should be a sub-class of Tree", () => {
    expect.assertions(2);

    const tree = new OrangeTree(1);

    expect(tree instanceof Tree).toBe(true);
    expect(tree instanceof OrangeTree).toBe(true);
  });

  describe("class properties:", () => {
    const tree = new OrangeTree(1);

    it("should have a property called oranges.", () => {
      expect.assertions(1);

      expect(tree.oranges).toEqual([]);
    });
  });

  describe("class methods:", () => {
    describe("ageOneYear:", () => {
      it("should be implemented in the OrangeTree class", () => {
        expect.assertions(1);

        const tree = new OrangeTree(2);

        expect(typeof tree.ageOneYear).not.toBe("undefined");
      });

      it("should increment the age property by one", () => {
        expect.assertions(1);

        const tree = new OrangeTree(2);

        tree.ageOneYear();

        expect(tree.age).toEqual(3);
      });

      it("should check if the tree is alive", () => {
        const tree = new OrangeTree(0);

        const spy = jest.spyOn(tree, "isAlive");

        tree.ageOneYear();

        expect(spy).toHaveBeenCalled();

        spy.mockRestore();
      });

      it("should call grow oranges", () => {
        const tree = new OrangeTree(0);

        const spy = jest.spyOn(tree, "growOranges");

        tree.ageOneYear();

        expect(spy).toHaveBeenCalled();

        spy.mockRestore();
      });

      describe("height increment:", () => {
        it("should grow 25 centimeters per year, from 1 to 9 years old (included)", () => {
          expect.assertions(9);

          const tree = new OrangeTree(0);

          for (let index = 1; index < 10; index++) {
            const previousHeight = tree.height;

            tree.ageOneYear();

            expect(tree.height).toEqual(previousHeight + 25);
          }
        });

        it("should grow 10 centimeters per year, from 10 to 20 years old (included)", () => {
          expect.assertions(10);

          const tree = new OrangeTree(9);

          for (let index = 0; index < 10; index++) {
            const previousHeight = tree.height;

            tree.ageOneYear();

            expect(tree.height).toEqual(previousHeight + 10);
          }
        });

        it("should stop growing after 20 years old ", () => {
          expect.assertions(80);

          const tree = new OrangeTree(20);

          for (let index = 0; index < 80; index++) {
            const previousHeight = tree.height;

            tree.ageOneYear();

            expect(tree.height).toEqual(previousHeight);
          }
        });
      });
    });

    describe("isAlive:", () => {
      it("should be implemented in the OrangeTree class", () => {
        expect.assertions(1);

        const tree = new OrangeTree(2);

        expect(typeof tree.isAlive).toBe("function");
      });

      it("should return boolean", async () => {
        expect.assertions(1);

        const tree = new OrangeTree(2);

        expect(tree.isAlive()).toBe(true);
      });

      it("should return `true` for the first 50 years of its life", () => {
        expect.assertions(49);

        const tree = new OrangeTree(0);

        for (let age = 1; age < 50; age++) {
          tree.ageOneYear();

          expect(tree.alive).toBe(true);
        }
      });

      it("should have a probability to die from 50 years old to 99 years old (included)", () => {
        expect.assertions(1);

        const tree = new OrangeTree(50);

        for (let age = 50; age < 99; age++) {
          tree.ageOneYear();
        }

        expect(tree.alive).toBe(false);
      });

      it("should die at 100 years old", () => {
        expect.assertions(100);

        for (let index = 0; index < 100; index++) {
          const tree = new OrangeTree(99);

          tree.ageOneYear();

          expect(tree.alive).toBe(false);
        }
      });

      it("should have more probability to die the longer it aged", () => {
        expect.assertions(1);

        const youngerTrees: OrangeTree[] = [];
        const olderTrees: OrangeTree[] = [];
        let nYoungerDeadTrees = 0;
        let nOlderDeadTrees = 0;

        for (let index = 0; index <= 1000; index++) {
          youngerTrees.push(new OrangeTree(60));
          olderTrees.push(new OrangeTree(80));
        }

        youngerTrees.forEach((tree) => {
          tree.ageOneYear();

          if (!tree.alive) {
            nYoungerDeadTrees++;
          }
        });

        olderTrees.forEach((tree) => {
          tree.ageOneYear();

          if (!tree.alive) {
            nOlderDeadTrees++;
          }
        });

        expect(nYoungerDeadTrees < nOlderDeadTrees).toBe(true);
      });
    });

    describe("growOranges:", () => {
      it("should be implemented in the OrangeTree class", () => {
        expect.assertions(1);

        const tree = new OrangeTree(2);

        expect(typeof tree.growOranges).toBe("function");
      });

      it("should grow 0 oranges each years, from 0 to 4 years old (included)", () => {
        expect.assertions(5);

        for (let age = 0; age < 5; age++) {
          const tree = new OrangeTree(age);

          tree.growOranges();

          expect(tree.oranges.length).toEqual(0);
        }
      });

      it("should grow 10 oranges each years, from 5 to 10 years old (included)", () => {
        expect.assertions(6);

        for (let age = 5; age <= 10; age++) {
          const tree = new OrangeTree(age);

          tree.growOranges();

          expect(tree.oranges.length).toEqual(10);
        }
      });

      it("should grow 20 oranges each years, from 11 to 20 years old (included)", () => {
        expect.assertions(10);

        for (let age = 11; age <= 20; age++) {
          const tree = new OrangeTree(age);

          tree.growOranges();

          expect(tree.oranges.length).toEqual(20);
        }
      });

      it("should grow 5 oranges each years, from 21 to 40 years old (included)", () => {
        expect.assertions(20);

        for (let age = 21; age <= 40; age++) {
          const tree = new OrangeTree(age);

          tree.growOranges();

          expect(tree.oranges.length).toEqual(5);
        }
      });

      it("should not grow any oranges from year 40 to the rest of its life", () => {
        expect.assertions(59);

        for (let age = 41; age <= 99; age++) {
          const tree = new OrangeTree(age);

          tree.growOranges();

          expect(tree.oranges.length).toEqual(0);
        }
      });

      it("should remove all oranges from the tree before growing new ones", () => {
        expect.assertions(2);

        const tree = new OrangeTree(10);

        tree.growOranges();

        expect(tree.oranges.length).toEqual(10);
        tree.growOranges();

        expect(tree.oranges.length).toEqual(10);
      });
    });

    describe("pickAnOrange:", () => {
      let spy;
      
      beforeAll(() => {
        spy = jest.spyOn(console, "log").mockImplementation(() => {})
      })

      afterAll(() => {
        spy.mockRestore()
      })
      it("should be implemented in the OrangeTree class", () => {
        expect.assertions(1);

        const tree = new OrangeTree(2);

        expect(typeof tree.pickAnOrange).toBe("function");
      });

      it("should not pick an orange if `oranges` is empty", () => {
        expect.assertions(1);

        const tree = new OrangeTree(0);

        tree.pickAnOrange();

        expect(tree.oranges.length).toEqual(0);
      });

      it("should pick an orange if `oranges` is not empty", () => {
        expect.assertions(1);

        const tree = new OrangeTree(0);

        for (let index = 0; index < 2; index++) {
          tree.oranges.push("🍊");
        }

        tree.pickAnOrange();

        expect(tree.oranges.length).toEqual(1);
      });
    });
  });
});
