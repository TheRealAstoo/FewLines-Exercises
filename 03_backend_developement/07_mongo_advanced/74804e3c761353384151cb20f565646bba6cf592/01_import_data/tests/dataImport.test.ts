import * as mongoDb from "mongodb";
import { dropAll } from "./test-utils";
import dataImport from "../src/dataImport";

const testDatabaseUrl =
  process.env.MONGODB_DATABASE_URL || "mongodb://mongo-advanced-app:password@localhost:27016/mongo-advanced";

const testOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 500,
  serverSelectionTimeoutMS: 500,
};

async function initTestDatabase(): Promise<mongoDb.MongoClient> {
  return new Promise((resolve, reject) => {
    mongoDb.MongoClient.connect(testDatabaseUrl, testOptions, async (error, client) => {
      if (error) {
        reject(error);
      } else {
        resolve(client);
      }
    });
  });
}

describe("#importData", () => {
  let client: mongoDb.MongoClient;
  let db: mongoDb.Db;

  beforeAll(async () => {
    try {
      client = await initTestDatabase();
      db = client.db();
    } catch (error) {
      console.warn(error);
      console.error("Can't log to MongoDB Server, did you start it?");
    }
  });
  beforeEach(async () => {
    if (db) {
      await dropAll(db);
    }
  });
  afterAll(async () => {
    if (client) {
      await client.close();
    }
  });

  it("Should add games and platforms collections to the database", async () => {
    expect.assertions(1);

    await dataImport(db);
    const collections = await db.listCollections().toArray();
    const collectionsNames = collections.map((collection) => collection.name);
    expect(collectionsNames.sort()).toEqual(["games", "platforms"]);
  });

  it("Should add 2270 games to the 'games' collection", async () => {
    await dataImport(db);
    const games = await db.collection("games").find();
    const counter = await games.count();
    expect(counter).toBe(2270);
  });

  it("Should add 3 platforms to the 'platforms' collection", async () => {
    await dataImport(db);
    const platforms = await db.collection("platforms").find();
    const counter = await platforms.count();
    expect(counter).toBe(3);
  });

  test("Platforms must not contain any games", async () => {
    await dataImport(db);
    const platforms = await db.collection("platforms").find().toArray();

    expect.assertions(platforms.length);

    platforms.forEach((platform) => {
      expect(Object.keys(platform)).not.toContain("games");
    });
  });
});
