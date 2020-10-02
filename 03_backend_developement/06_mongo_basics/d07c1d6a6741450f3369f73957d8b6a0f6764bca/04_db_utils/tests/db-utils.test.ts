import * as mongoDb from "mongodb";
import { dropAll } from "./test-utils";
import { User } from "./user";
import { users } from "./users";
import { readCode } from "camp2-helpers";

import { allCollections } from "../src/allCollections";
import { Book } from "./book";
import { booksValidator } from "./booksValidator";
import { createCollectionWithValidator } from "../src/createCollectionWithValidator";
import { deleteCollection } from "../src/deleteCollection";
import { deleteManyDocuments } from "../src/deleteManyDocuments";
import { deleteOneDocument } from "../src/deleteOneDocument";
import { findManyDocuments } from "../src/findManyDocuments";
import { findOneDocument } from "../src/findOneDocument";
import { initDatabase } from "../src/initDatabase";
import { insertManyDocuments } from "../src/insertManyDocuments";
import { insertOneDocument } from "../src/insertOneDocument";
import { renameCollection } from "../src/renameCollection";
import { updateManyDocuments } from "../src/updateManyDocuments";
import { updateOneDocument } from "../src/updateOneDocument";

const testDatabaseUrl =
  process.env.MONGODB_DATABASE_URL ||
  "mongodb://mongo-basics-app:password@localhost:27017/mongo-basics";

const testOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 500,
  serverSelectionTimeoutMS: 500
};

async function initTestDatabase(): Promise<mongoDb.MongoClient> {
  return new Promise((resolve, reject) => {
    mongoDb.MongoClient.connect(
      testDatabaseUrl,
      testOptions,
      async (error, client) => {
        if (error) {
          reject(error);
        } else {
          resolve(client);
        }
      }
    );
  });
}

describe("DB utils", () => {
  let client: mongoDb.MongoClient;
  let db: mongoDb.Db;

  beforeAll(async () => {
    try {
      client = await initTestDatabase();
      db = client.db();
    } catch(error) {
      console.log("Can't log to MongoDB Server, did you start it?");
    }
  });
  beforeEach(async () => {
    if (db) {
      await dropAll(db);
      await db.createCollection<User>("users").then((userCollection) => {
        userCollection.insertMany(users);
      });
    }
  })
  afterAll(async () => {
    if (client) {
      await client.close();
    }
  });

  describe("#initDatabase", () => {
    it("Should return a promise of a mongo client", async () => {
      const clientPromise = initDatabase();

      expect(clientPromise instanceof Promise).toBe(true);

      await clientPromise.then((client) => {
        expect(typeof client.close).toBe("function");
        expect(typeof client.db).toBe("function");
        client.close();
      });
    });

    it("Should handle errors", async () => {
      const wrongUrl = "thisIsAWrongUrl.fail";

      initDatabase(wrongUrl)
        .then((client) => {
          client.close();
        })
        .catch((error) => {
          expect(error.message).toBe("Invalid connection string");
        });
    });
  });

  describe("#createCollectionWithValidator", () => {
    it("Should create a collection including a validator", async () => {
      await createCollectionWithValidator<Book>(
        db,
        "books",
        booksValidator
      ).then(async (collection) => {
        const expectedKeys = ["_id", "title", "author", "description"];
        const validator = await collection.options();

        expect(collection.namespace).toBe("mongo-basics.books");
        expect(Object.keys(validator.validator.$jsonSchema.properties)).toEqual(
          expectedKeys
        );
      });
    });

    it("Should return a promise of a mongo collection", async () => {
      const collectionPromise = createCollectionWithValidator<Book>(
        db,
        "books",
        booksValidator
      );

      expect(collectionPromise instanceof Promise).toBe(true);

      await collectionPromise.then((collection) => {
        expect(typeof collection.insertOne).toBe("function");
        expect(typeof collection.insertMany).toBe("function");
      });
    });

    it("Should use generic types", async () => {
      const code = await readCode("src/createCollectionWithValidator.ts");

      expect(code).toMatch(/export function createCollectionWithValidator<T>/);
      expect(code).toMatch(/Promise<mongo.Collection<T>>/);
      expect(code).toMatch(/.createCollection<T>/);
    });
  });

  describe("#allCollections", () => {
    it("Should return all the collections of a given database", async () => {
      await db.createCollection<Book>("books");

      const expectedNames = ["users", "books"];
      const collections = await allCollections(db);

      collections.forEach((collection) => {
        expect(expectedNames).toContain(collection.collectionName);
      });
    });

    it("Should return a promise", async () => {
      const collectionsPromise = allCollections(db);

      expect(collectionsPromise instanceof Promise).toBe(true);
    });
  });

  describe("#renameCollection", () => {
    it("Should rename properly the collection in the given database", async () => {
      const renamedCollection = await renameCollection(
        db,
        "users",
        "registeredUsers"
      );

      expect(renamedCollection.namespace).toBe("mongo-basics.registeredUsers");
    });

    it("Should return a promise of a mongo collection", async () => {
      const collectionPromise = renameCollection(
        db,
        "users",
        "registeredUsers"
      );

      expect(collectionPromise instanceof Promise).toBe(true);

      await collectionPromise.then((collection) => {
        expect(typeof collection.insertOne).toBe("function");
        expect(typeof collection.insertMany).toBe("function");
      });
    });
  });

  describe("#deleteCollection", () => {
    it("Should delete the collection in the given database", async () => {
      await deleteCollection(db, "users");

      expect(await db.collections()).toEqual([]);
    });

    it("Should return a promise", async () => {
      const booleanPromise = deleteCollection(db, "users");

      expect(booleanPromise instanceof Promise).toBe(true);

      await booleanPromise;
    });

    it("Should return true when a collection is deleted", async () => {
      const response = await deleteCollection(db, "users");

      expect(response).toBe(true);
    });
  });

  describe("#insertOneDocument", () => {
    it("Should insert the document in the given collection", async () => {
      const user = {
        firstName: "FirstName",
        lastName: "LastName",
        age: 34,
      };

      const usersCollection = db.collection("users");

      await insertOneDocument<User>(usersCollection, user);

      const retrievedUser = await usersCollection.findOne({
        firstName: "FirstName",
      });

      expect(retrievedUser).toMatchObject(user);
    });

    it("Should return a promise of the inserted document", async () => {
      const user = {
        firstName: "Firstame",
        lastName: "LastName",
        age: 34,
      };

      const usersCollection = db.collection("users");
      const documentPromise = insertOneDocument<User>(usersCollection, user);

      expect(documentPromise instanceof Promise).toBe(true);

      await documentPromise.then(async (document) => {
        expect(document).toMatchObject(user);
      });
    });

    it("Should use generic types", async () => {
      const code = await readCode("src/insertOneDocument.ts");

      expect(code).toMatch(/insertOneDocument<T>/);
      expect(code).toMatch(/rawData: T/);
      expect(code).toMatch(/Promise<T>/);
    });
  });

  describe("#insertManyDocuments", () => {
    it("Should insert the bunch of documents in the given collection", async () => {
      const bunchOfUsers = [
        {
          firstName: "FirstName",
          lastName: "LastName",
          age: 34,
        },
        {
          firstName: "FirstName2",
          lastName: "LastName2",
          age: 34,
        },
        {
          firstName: "FirstName3",
          lastName: "LastName3",
          age: 34,
        },
      ];

      const usersCollection = db.collection("users");

      await insertManyDocuments<User>(usersCollection, bunchOfUsers);

      const retrievedUsers = await usersCollection
        .find({
          age: 34,
        })
        .toArray();

      expect(retrievedUsers[0]).toMatchObject(bunchOfUsers[0]);
      expect(retrievedUsers[1]).toMatchObject(bunchOfUsers[1]);
      expect(retrievedUsers[2]).toMatchObject(bunchOfUsers[2]);
    });

    it("Should return a promise of the inserted documents", async () => {
      const bunchOfUsers = [
        {
          firstName: "FirstName",
          lastName: "LastName",
          age: 34,
        },
        {
          firstName: "FirstName2",
          lastName: "LastName2",
          age: 34,
        },
        {
          firstName: "FirstName3",
          lastName: "LastName3",
          age: 34,
        },
      ];

      const usersCollection = db.collection("users");

      const documentsPromise = insertManyDocuments<User>(
        usersCollection,
        bunchOfUsers
      );

      expect(documentsPromise instanceof Promise).toBe(true);

      await documentsPromise.then((documents) => {
        expect(documents[0]).toMatchObject(bunchOfUsers[0]);
        expect(documents[1]).toMatchObject(bunchOfUsers[1]);
        expect(documents[2]).toMatchObject(bunchOfUsers[2]);
      });
    });

    it("Should use generic types", async () => {
      const code = await readCode("src/insertManyDocuments.ts");

      expect(code).toMatch(/insertManyDocuments<T>/);
      expect(code).toMatch(/rawData: T\[\]/);
      expect(code).toMatch(/Promise<T\[\]>/);
    });
  });

  describe("#findOneDocument", () => {
    it("Should retrieve a document in the database", async () => {
      const usersCollection = db.collection("users");

      const retrievedDocument = await findOneDocument<User>(usersCollection, {
        firstName: "Jean",
      });

      expect(retrievedDocument).toMatchObject(users[0]);
    });

    it("Should return a promise", async () => {
      const usersCollection = db.collection("users");

      const documentPromise = findOneDocument<User>(usersCollection, {
        firstName: "Jean",
      });

      expect(documentPromise instanceof Promise).toBe(true);

      await documentPromise;
    });
  });

  describe("#findManyDocuments", () => {
    it("Should retrieve a bunch of documents in the database", async () => {
      const usersCollection = db.collection("users");

      const retrievedUsers = await findManyDocuments<User>(usersCollection, {
        age: 20,
      });

      expect(retrievedUsers[0]).toMatchObject(users[0]);
      expect(retrievedUsers[1]).toMatchObject(users[1]);
      expect(retrievedUsers[2]).toMatchObject(users[2]);
    });

    it("Should return a promise", async () => {
      const usersCollection = db.collection("users");

      const documentsPromise = findManyDocuments<User>(usersCollection, {
        Age: 20,
      });

      expect(documentsPromise instanceof Promise).toBe(true);

      await documentsPromise;
    });
  });

  describe("#updateOneDocument", () => {
    it("Should update the document in the given collection", async () => {
      const usersCollection = await db.collection("users");

      await updateOneDocument<User>(
        usersCollection,
        { firstName: "Jean" },
        { $set: { firstName: "Jeanno" } }
      );

      const updatedUser = await usersCollection.findOne({
        firstName: "Jeanno",
      });

      expect(updatedUser.firstName).toBe("Jeanno");
    });

    it.only("Should return a promise of the updated document", async () => {
      const usersCollection = db.collection("users");

      const expectedUser = {
        firstName: "Jeanno",
        lastName: "Bonbeurre",
        age: 20,
      };

      const documentPromise = updateOneDocument<User>(
        usersCollection,
        { firstName: "Jean" },
        { $set: { firstName: "Jeanno" } }
      );

      expect(documentPromise instanceof Promise).toBe(true);

      await documentPromise.then((updatedUser) => {
        expect(updatedUser).toMatchObject(expectedUser);
      });
    });

    it("Should use generic types", async () => {
      const code = await readCode("src/updateOneDocument.ts");

      expect(code).toMatch(/updateOneDocument<T>/);
      expect(code).toMatch(/mongo.FilterQuery<T>/);
      expect(code).toMatch(/mongo.UpdateQuery<T>/);
      expect(code).toMatch(/Promise<T>/);
    });
  });

  describe("#updateManyDocuments", () => {
    it("Should update the bunch of documents in the given collection", async () => {
      const usersCollection = await db.collection("users");

      await updateManyDocuments<User>(
        usersCollection,
        { age: 20 },
        { $set: { age: 25 } }
      );

      const updatedUsers = await usersCollection
        .find({
          age: 25,
        })
        .toArray();

      updatedUsers.forEach((user) => {
        expect(user.age).toBe(25);
      });
    });

    it("Should return a promise of an array of the updated documents", async () => {
      const usersCollection = await db.collection("users");

      const documentsPromise = updateManyDocuments<User>(
        usersCollection,
        { age: 20 },
        { $set: { age: 25 } }
      );

      expect(documentsPromise instanceof Promise).toBe(true);

      await documentsPromise.then(async (returnedUsers) => {
        expect(Array.isArray(returnedUsers)).toBe(true);

        const expectedKeys = ["_id", "firstName", "lastName", "age"];

        const updatedUsers = await usersCollection
          .find({
            age: 25,
          })
          .toArray();

        const expectedValues0 = Object.values(updatedUsers[0]);
        const expectedValues1 = Object.values(updatedUsers[1]);
        const expectedValues2 = Object.values(updatedUsers[2]);

        returnedUsers.forEach((user) => {
          expect(user.age).toBe(25);

          expect(Object.keys(user).sort()).toEqual(expectedKeys.sort());
        });

        expect(Object.values(returnedUsers[0])).toEqual(
          expect.arrayContaining(expectedValues0)
        );

        expect(Object.values(returnedUsers[1])).toEqual(
          expect.arrayContaining(expectedValues1)
        );

        expect(Object.values(returnedUsers[2])).toEqual(
          expect.arrayContaining(expectedValues2)
        );
      });
    });

    it("Should use generic types", async () => {
      const code = await readCode("src/updateManyDocuments.ts");

      expect(code).toMatch(/updateManyDocuments<T>/);
      expect(code).toMatch(/mongo.FilterQuery<T>/);
      expect(code).toMatch(/mongo.UpdateQuery<T>/);
      expect(code).toMatch(/Promise<T\[\]>/);
    });
  });

  describe("#deleteOneDocument", () => {
    it("Should delete the document in the given collection", async () => {
      const usersCollection = await db.collection("users");

      await deleteOneDocument<User>(usersCollection, { firstName: "Jean" });

      expect(await usersCollection.findOne({ firstName: "Jean" })).toBe(null);
    });

    it("Should return true in case of success", async () => {
      const usersCollection = await db.collection("users");

      const result = await deleteOneDocument<User>(usersCollection, {
        firstName: "Jean",
      });

      expect(result).toBe(true);
    });

    it("Should return false if no document has been deleted", async () => {
      const usersCollection = await db.collection("users");

      const result = await deleteOneDocument<User>(usersCollection, {
        firstName: "wrongFirstName",
      });

      expect(result).toBe(false);
    });

    it("Should return a promise", async () => {
      const usersCollection = await db.collection("users");

      const booleanPromise = deleteOneDocument<User>(usersCollection, {
        firstName: "Jean",
      });

      expect(booleanPromise instanceof Promise).toBe(true);

      await booleanPromise;
    });

    it("Should use generic types", async () => {
      const code = await readCode("src/deleteOneDocument.ts");

      expect(code).toMatch(/deleteOneDocument<T>/);
      expect(code).toMatch(/mongo.FilterQuery<T>/);
      expect(code).toMatch(/Promise<boolean>/);
    });
  });

  describe("#deleteManyDocuments", () => {
    it("Should delete the documents in the given collection", async () => {
      const usersCollection = await db.collection("users");

      await deleteManyDocuments<User>(usersCollection, { age: 20 });

      expect(await usersCollection.find({ age: 20 }).toArray()).toEqual([]);
    });

    it("Should return true in case of success", async () => {
      const usersCollection = await db.collection("users");

      const result = await deleteManyDocuments<User>(usersCollection, {
        age: 20,
      });

      expect(result).toBe(true);
    });

    it("Should return false if no document has been deleted", async () => {
      const usersCollection = await db.collection("users");

      const result = await deleteManyDocuments<User>(usersCollection, {
        age: 40,
      });

      expect(result).toBe(false);
    });

    it("Should return a promise", async () => {
      const usersCollection = await db.collection("users");

      const booleanPromise = deleteManyDocuments<User>(usersCollection, {
        firstName: "Jean",
      });

      expect(booleanPromise instanceof Promise).toBe(true);

      await booleanPromise;
    });

    it("Should use generic types", async () => {
      const code = await readCode("src/deleteManyDocuments.ts");

      expect(code).toMatch(/deleteManyDocuments<T>/);
      expect(code).toMatch(/mongo.FilterQuery<T>/);
      expect(code).toMatch(/Promise<boolean>/);
    });
  });
});
