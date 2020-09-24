import { parse } from "recast";
import { namedTypes } from "ast-types";
import * as tsParser from "recast/parsers/typescript";

/**
  Usage example:

  - Cast student file into string:
  const studentCode = await readCode(
    path.resolve(__dirname, "../src/index.ts")
  );

  - Pass the string to the parser, and get the node:
  const treeClass = findNode(studentCode, "Tree");

  - Search deeper into the node:
  const isAlive = findNode(treeClass, "isAlive");

  expect(isAlive).not.toBe(undefined);
  expect(isAlive.abstract).toBe(true);
  expect(isAlive.kind).toBe(NODE_KIND.METHOD);

  You can search by name, class member name (e.g. "constructor"). If you don't pass a `name` argument,
  the function will return and array of all the root nodes.
  
  To prevent breaking the tests in case of searching something that is not in the ast,
  the function returns "undefined".

  This is a WIP, if you probably should investigate the ast if you can't find what you are looking for.
 */

export enum NODE_TYPE {
  CLASS_DECLARATION = "ClassDeclaration",
  CLASS_PROPERTY = "ClassProperty",
  CLASS_METHOD = "ClassMethod",
  VARIABLE_DECLARATION = "VariableDeclaration",
  EXPORT_NAMED_DECLARATION = "ExportNamedDeclaration",
}

export enum NODE_KIND {
  METHOD = "method",
  CONSTRUCTOR = "constructor",
}

export enum ACCESSIBILITY {
  PUBLIC = "public",
  PRIVATE = "private",
  PROTECTED = "protected",
}

export interface Node extends namedTypes.Node {
  id: Node;
  name: string;
  body: Node[] & { body: Node[] };
  declarations: Node[];
  declaration: Node;
  key: Node;
  abstract: boolean;
  static: boolean;
  readonly: boolean;
  kind: NODE_KIND;
  accessibility: ACCESSIBILITY;
  async: boolean;
  params: Node[];
  value: Node;
  superClass: Node;
}

export function findNode(
  studentCode: string | Node,
  name: string
): Node | undefined {
  if (typeof studentCode === "string") {
    const ast = parse(studentCode, {
      parser: tsParser,
    });

    return ast.program.body.find((node: Node) => {
      if (node.declaration) {
        return node.declaration.id.name === name;
      }

      if (node.declarations) {
        return node.declarations[0].id.name === name;
      }

      if (node.id) {
        return node.id.name === name;
      }

      return false;
    });
  }

  if (studentCode.body) {
    return studentCode.body.body.find((node: Node) => {
      return node.key.name === name;
    });
  }

  return undefined;
}

export function parseAllNodes(studentCode: string): Node[] {
  const ast = parse(studentCode, {
    parser: tsParser,
  });

  return ast.program.body;
}
