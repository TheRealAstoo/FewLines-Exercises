import * as mongoDb from "mongodb";
import { dropAll } from "./test-utils";
import updateAuthor from "../src/updateAuthor";
import { posts, users } from "./test-data";
import * as error from "../utils/error";

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

describe("#updateAuthor", () => {
  let client: mongoDb.MongoClient;
  let db: mongoDb.Db;
  const spy = jest.spyOn(error, "isPresent");

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
    spy.mockReset();
    if (db) {
      await dropAll(db);
      await db.collection("users").insertMany(users);
      await db.collection("posts").insertMany(posts);
    }
  });
  afterAll(async () => {
    if (client) {
      await client.close();
    }
  });

  it("Should update user when there's no error", async () => {
    await updateAuthor(client, "5f6a47ce6ec9745e8856e432", { firstName: "Jon", lastName: "Doe" });
    const jon = await db.collection("users").findOne({ firstName: "Jon", lastName: "Doe" });
    expect(jon).not.toBe(null);
    expect(spy).toHaveBeenCalledTimes(1);

    spy.mockReset();
  });

  it("Should update posts when there's no error", async () => {
    await updateAuthor(client, "5f6a47ce6ec9745e8856e432", { firstName: "Jon", lastName: "Doe" });
    const posts = await db.collection("posts").find({ "author.name": "Jon Doe" }).toArray();

    expect(posts.length).not.toBe(0);
    expect(spy).toHaveBeenCalledTimes(1);

    spy.mockReset();
  });

  it("Should NOT update user when an error is thrown", async () => {
    spy.mockReturnValue(true);
    await updateAuthor(client, "5f6a47ce6ec9745e8856e432", { firstName: "Jon", lastName: "Doe" });
    const jon = await db.collection("users").findOne({ firstName: "Jon", lastName: "Doe" });

    expect(jon).toBe(null);
    expect(spy).toHaveBeenCalledTimes(1);

    spy.mockReset();
  });

  it("Should NOT update posts when an error is thrown", async () => {
    spy.mockReturnValue(true);
    await updateAuthor(client, "5f6a47ce6ec9745e8856e432", { firstName: "Jon", lastName: "Doe" });
    const posts = await db.collection("posts").find({ "author.name": "Jon Doe" }).toArray();

    expect(posts.length).toBe(0);
    expect(spy).toHaveBeenCalledTimes(1);

    spy.mockReset();
  });
});
