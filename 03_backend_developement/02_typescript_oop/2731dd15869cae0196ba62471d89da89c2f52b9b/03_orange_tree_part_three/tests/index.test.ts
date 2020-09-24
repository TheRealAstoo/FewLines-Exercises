import * as path from "path";

import { readCode } from "./utils/readCode";
import { Tree } from "../src/Tree";
import { OrangeTree } from "../src/OrangeTree";
import {
  findNode,
  Node,
  NODE_TYPE,
  NODE_KIND,
  ACCESSIBILITY,
} from "./utils/astNodeParser";

describe("Tree parent class", () => {
  let treeClassNode: Node;

  beforeAll(async (done) => {
    const studentCode = await readCode(
      path.resolve(__dirname, "../src/Tree.ts")
    );

    treeClassNode = findNode(studentCode, "Tree");

    done();
  });

  it("should be a class", () => {
    expect.assertions(1);

    expect(treeClassNode.type).toBe(NODE_TYPE.CLASS_DECLARATION);
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

    it("should initialize _age", () => {
      expect.assertions(1);

      const firstParameter = constructorNode.params[0].name;

      expect(firstParameter).toBe("age");
    });
  });

  describe("class properties:", () => {
    describe("_age:", () => {
      let ageNode: Node;

      beforeAll(() => {
        ageNode = findNode(treeClassNode, "_age");
      });

      it("should have a property called _age.", () => {
        expect.assertions(2);

        expect(ageNode).not.toBe(undefined);
        expect(ageNode.type).toBe(NODE_TYPE.CLASS_PROPERTY);
      });

      test("_age should be protected", () => {
        expect.assertions(1);

        expect(ageNode.accessibility).toBe(ACCESSIBILITY.PROTECTED);
      });
    });

    describe("_height:", () => {
      let heightNode: Node;

      beforeAll(() => {
        heightNode = findNode(treeClassNode, "_height");
      });

      it("should have a property called _height, that get computed based on its age", () => {
        expect.assertions(2);

        expect(heightNode).not.toBe(undefined);
        expect(heightNode.type).toBe(NODE_TYPE.CLASS_PROPERTY);
      });

      test("_height should be protected", () => {
        expect.assertions(1);

        expect(heightNode.accessibility).toBe(ACCESSIBILITY.PROTECTED);
      });
    });

    describe("_alive:", () => {
      let aliveNode: Node;

      beforeAll(() => {
        aliveNode = findNode(treeClassNode, "_alive");
      });

      it("should have a property called _alive, with a default value of `true`.", () => {
        expect.assertions(3);

        expect(aliveNode).not.toBe(undefined);
        expect(aliveNode.type).toBe(NODE_TYPE.CLASS_PROPERTY);
        expect(aliveNode.value.value).toBe(true);
      });

      test("_alive should be protected", () => {
        expect.assertions(1);

        expect(aliveNode.accessibility).toBe(ACCESSIBILITY.PROTECTED);
      });
    });
  });

  describe("class methods:", () => {
    describe("isAlive:", () => {
      let isAliveNode: Node;

      beforeAll(() => {
        isAliveNode = findNode(treeClassNode, "_isAlive");
      });

      it("should have a method called _isAlive.", () => {
        expect.assertions(2);

        expect(isAliveNode).not.toBe(undefined);
        expect(isAliveNode.kind).toBe(NODE_KIND.METHOD);
      });

      it("should be an abstract method.", () => {
        expect.assertions(1);

        expect(isAliveNode.abstract).toBe(true);
      });

      it("should be protected.", () => {
        expect.assertions(1);

        expect(isAliveNode.accessibility).toBe(ACCESSIBILITY.PROTECTED);
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

    describe("seed:", () => {
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
    });
  });
});

describe("OrangeTree class:", () => {
  let orangeTreeNode: Node;

  beforeAll(async (done) => {
    const studentCode = await readCode(
      path.resolve(__dirname, "../src/OrangeTree.ts")
    );

    orangeTreeNode = findNode(studentCode, "OrangeTree");

    done();
  });

  it("should be a class", () => {
    expect.assertions(1);

    expect(orangeTreeNode.type).toBe(NODE_TYPE.CLASS_DECLARATION);
  });

  it("should be a sub-class of Tree", () => {
    expect.assertions(1);

    expect(orangeTreeNode.superClass.name).toBe("Tree");
  });

  describe("_oranges:", () => {
    let orangesNode: Node;

    beforeAll(() => {
      orangesNode = findNode(orangeTreeNode, "_oranges");
    });

    it("should have a property called _oranges.", () => {
      expect.assertions(2);

      expect(orangesNode).not.toBe(undefined);
      expect(orangesNode.type).toBe(NODE_TYPE.CLASS_PROPERTY);
    });

    test("_oranges should be protected", () => {
      expect.assertions(1);

      expect(orangesNode.accessibility).toBe(ACCESSIBILITY.PROTECTED);
    });
  });

  describe("getters:", () => {
    test("age should be a getter", () => {
      const ageGetter = findNode(orangeTreeNode, "age");

      expect(ageGetter.kind).toBe("get");
    });

    test("height should be a getter", () => {
      const heightGetter = findNode(orangeTreeNode, "height");

      expect(heightGetter.kind).toBe("get");
    });

    test("alive should be a getter", () => {
      const aliveGetter = findNode(orangeTreeNode, "alive");

      expect(aliveGetter.kind).toBe("get");
    });

    test("oranges should be a getter", () => {
      const orangesGetter = findNode(orangeTreeNode, "oranges");

      expect(orangesGetter.kind).toBe("get");
    });
  });
});
