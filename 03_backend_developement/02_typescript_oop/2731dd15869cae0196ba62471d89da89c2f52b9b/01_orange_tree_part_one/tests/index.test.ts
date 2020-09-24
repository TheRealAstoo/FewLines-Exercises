import * as path from "path";

import { readCode } from "./utils/readCode";
import { Tree } from "../src/index";
import { findNode, Node, NODE_TYPE, NODE_KIND } from "./utils/astNodeParser";

describe("Tree class", () => {
  let treeClassNode: Node;

  beforeAll(async (done) => {
    const studentCode = await readCode(
      path.resolve(__dirname, "../src/index.ts")
    );

    treeClassNode = findNode(studentCode, "Tree");

    done();
  });

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
    expect.assertions(2);

    expect(treeClassNode.type).toBe(NODE_TYPE.CLASS_DECLARATION);
    expect(tree instanceof Tree).toBe(true);
  });

  it("should be abstract", () => {
    expect.assertions(1);

    expect(treeClassNode.abstract).toBe(true);
  });

  describe("class constructor:", () => {
    let constructorNode: Node;

    beforeAll(() => {
      constructorNode = findNode(treeClassNode, "constructor");
    });

    test("Tree should have a constructor", () => {
      expect.assertions(2);

      expect(constructorNode).not.toBe(undefined);
      expect(constructorNode.kind).toBe(NODE_KIND.CONSTRUCTOR);
    });

    it("should initialize age", () => {
      expect.assertions(1);

      const firstParameter = constructorNode.params[0].name;

      expect(firstParameter).toBe("age");
    });

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

      const ageNode = findNode(treeClassNode, "age");

      expect(ageNode).not.toBe(undefined);
      expect(ageNode.type).toBe(NODE_TYPE.CLASS_PROPERTY);
    });

    it("should have a property called height, that get computed based on its age", () => {
      expect.assertions(4);

      const heightNode = findNode(treeClassNode, "height");

      expect(heightNode).not.toBe(undefined);
      expect(heightNode.type).toBe(NODE_TYPE.CLASS_PROPERTY);
      expect(tree.height).toEqual(25);
      expect(testTree.height).toEqual(325);
    });

    it("should have a property called alive, with a default value of `true`.", () => {
      expect.assertions(3);

      const aliveNode = findNode(treeClassNode, "alive");

      expect(aliveNode).not.toBe(undefined);
      expect(aliveNode.type).toBe(NODE_TYPE.CLASS_PROPERTY);
      expect(aliveNode.value.value).toBe(true);
    });
  });

  describe("class methods:", () => {
    describe("isAlive:", () => {
      let isAliveNode: Node;

      beforeAll(() => {
        isAliveNode = findNode(treeClassNode, "isAlive");
      });

      it("should have a method called isAlive.", () => {
        expect.assertions(2);

        expect(isAliveNode).not.toBe(undefined);
        expect(isAliveNode.kind).toBe(NODE_KIND.METHOD);
      });

      it("should be an abstract method.", () => {
        expect.assertions(1);

        expect(isAliveNode.abstract).toBe(true);
      });
    });

    describe("ageOneYear:", () => {
      let ageOneYearNode: Node;

      beforeAll(() => {
        ageOneYearNode = findNode(treeClassNode, "ageOneYear");
      });

      it("should have a method called ageOneYear.", () => {
        expect.assertions(2);

        expect(ageOneYearNode).not.toBe(undefined);
        expect(ageOneYearNode.kind).toBe(NODE_KIND.METHOD);
      });

      it("should be an abstract method.", () => {
        expect.assertions(1);

        expect(ageOneYearNode.abstract).toBe(true);
      });
    });

    describe("seed", () => {
      let seedNode: Node;

      beforeAll(() => {
        seedNode = findNode(treeClassNode, "seed");
      });

      it("should have a method called seed.", () => {
        expect.assertions(2);

        expect(seedNode).not.toBe(undefined);
        expect(seedNode.kind).toBe(NODE_KIND.METHOD);
      });

      it("should not be an abstract method.", () => {
        expect.assertions(1);

        expect(seedNode.abstract).toBe(undefined);
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
});
