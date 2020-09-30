import { exec } from "child_process";
import * as mongoDb from "mongodb";

export async function execP(
  cmd: string
): Promise<{ stdout: string; stderr: string }> {
  return new Promise(function (resolve, reject) {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        resolve({
          stdout: stdout.replace("\n", ""),
          stderr: stderr.replace("\n", ""),
        });
      }
    });
  });
}

export async function createCollection(
  db: mongoDb.Db,
  collectionName: string,
  options = {}
): Promise<mongoDb.Collection> {
  return new Promise((resolve, reject) => {
    try {
      db.createCollection(collectionName, options).then((collection) =>
        resolve(collection)
      );
    } catch (error) {
      reject(error);
    }
  });
}

export async function dropCollection(
  db: mongoDb.Db,
  collectionName: string
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    db.dropCollection(collectionName, (error, result) => {
      if (error && error.message.includes("ns not found")) {
        resolve(true);
      } else if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

export async function dropCollections(
  db: mongoDb.Db,
  collections: string[]
): Promise<boolean[]> {
  let operations: boolean[] = [];

  const promises: Promise<boolean>[] = [];

  collections.forEach((collection) =>
    promises.push(dropCollection(db, collection))
  );

  operations = await Promise.all(promises);

  return operations;
}

export async function dropAll(db: mongoDb.Db): Promise<void> {
  const collections = await db
    .listCollections()
    .toArray()
    .then((collections) => collections.map((c) => c.name));

  await dropCollections(db, collections);
}
