import * as path from "path";

import { supplies } from "../src/index";
import { readCode } from "./utils/readCode";

test("You should be able to add key/value pair on the fly", () => {
  expect.assertions(3);

  expect(typeof supplies).toBe("object");
  expect(Array.isArray(supplies)).toBe(false);

  supplies.foo = 1;
  expect(supplies.foo).toBe(1);
});

test("Supplies should have a valid signature that takes a number as value", async () => {
  expect.assertions(1);

  const studentCode = await readCode(
    path.resolve(__dirname, "../src/index.ts")
  );

  const isIndexSigned = studentCode.includes("[key: string]: number");

  expect(isIndexSigned).toBe(true);
});
