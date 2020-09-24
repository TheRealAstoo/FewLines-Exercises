// Use this file to test your `OrangeTree` class.
import { OrangeTree } from "./OrangeTree";

const youngOrangeTree = new OrangeTree(0);
const oldOrangeTree = new OrangeTree(7);
console.log(oldOrangeTree)
console.log(oldOrangeTree.ageOneYear())
console.log(oldOrangeTree)
console.log(oldOrangeTree.oranges)
console.log(oldOrangeTree.oranges.length)

const olderTree = new OrangeTree(10);
olderTree.growOranges(10);