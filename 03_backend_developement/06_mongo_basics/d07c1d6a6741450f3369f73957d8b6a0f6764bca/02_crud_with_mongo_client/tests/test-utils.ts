import { Db, Collection } from "mongodb";

export const randomInt = (max: number): number =>
  Math.floor(Math.random() * Math.floor(max));

export async function createCollection(
  db: Db,
  collectionName: string,
  options = {}
): Promise<Collection> {
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
  db: Db,
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
  db: Db,
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

export async function dropAll(db: Db): Promise<void> {
  const collections = await db
    .listCollections()
    .toArray()
    .then((collections) => collections.map((c) => c.name));

  await dropCollections(db, collections);
}
