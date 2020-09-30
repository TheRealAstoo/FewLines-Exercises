import { dropAll, execP } from "./test-utils";
import { expectMessage } from "camp2-helpers";
import { countries } from "./countries";
import * as mongoDb from "mongodb";

jest.setTimeout(5000)

const databaseUrl =
  process.env.MONGODB_DATABASE_URL ||
  "mongodb://mongo-basics-app:password@localhost:27017/mongo-basics";

const baseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 500,
  serverSelectionTimeoutMS: 500
};

async function initDatabase(): Promise<mongoDb.MongoClient> {
  return new Promise((resolve, reject) => {
    mongoDb.MongoClient.connect(
      databaseUrl,
      baseOptions,
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

describe("Play with shell", () => {
  let client: mongoDb.MongoClient;
  let db: mongoDb.Db;

  beforeAll(async () => {
    try {
      client = await initDatabase();
      db = client.db();
    } catch(error) {
      console.log("Can't log to MongoDB Server, did you start it?");
    }
  });
  beforeEach(async() => {
    if (db) {
      await dropAll(db);
    }
  })
  afterAll(async () => {
    if (client) {
      await client.close();
    }
  });

  describe("createCollection", () => {
    it("Should create a 'worldAtlas' collection in the DB", async () => {
      expect.assertions(2);

      await execP(
        `mongo "${databaseUrl}" < src/createCollection.js`
      );

      const collections = await db.listCollections().toArray();

      expect(collections.length).toBe(1);
      expect(collections[0].name).toBe("worldAtlas");
    });
  });

  describe("insertOneCountry", () => {
    it("Should insert one country in the right collection", async () => {
      expect.assertions(1);

      await execP(
        `mongo "${databaseUrl}" < src/insertOneCountry.js`
      );

      const worldAtlasCollection = await db.collection("worldAtlas");

      const result = await worldAtlasCollection.find().toArray();

      expect(result.length).toBe(1);
    });

    it("The country should have a 'name', a 'capital' and a 'continent'", async () => {
      expect.assertions(3);

      await execP(
        `mongo "${databaseUrl}" < src/insertOneCountry.js`
      );

      const worldAtlasCollection = await db.collection("worldAtlas");

      const result = await worldAtlasCollection.find().toArray();

      expectMessage(result[0].name, "Your country has no name.").toBeTruthy();

      expectMessage(
        result[0].capital,
        "Your country has no capital."
      ).toBeTruthy();

      expectMessage(
        result[0].continent,
        "Your country has no continent."
      ).toBeTruthy();
    });
  });

  describe("insertManyCountries", () => {
    it("Should insert at least 2 new countries in the right collection", async () => {
      expect.assertions(1);

      await execP(
        `mongo "${databaseUrl}" < src/insertManyCountries.js`
      );

      const worldAtlasCollection = await db.collection("worldAtlas");

      const result = await worldAtlasCollection.find().toArray();

      expectMessage(
        result.length > 1,
        "You should insert at least 2 new countries"
      ).toBe(true);
    });

    it("Each country should have a 'name', a 'capital' and a 'continent'", async () => {
      expect.assertions(9);

      await execP(
        `mongo "${databaseUrl}" < src/insertManyCountries.js`
      );

      const worldAtlasCollection = await db.collection("worldAtlas");

      const result = await worldAtlasCollection.find().toArray();

      result.forEach((country) =>
        expectMessage(
          Object.keys(country),
          `Country ${result.indexOf(country) + 1} has no name.`
        ).toContain("name")
      );

      result.forEach((country) =>
        expectMessage(
          Object.keys(country),
          `Country ${result.indexOf(country) + 1} has no capital.`
        ).toContain("capital")
      );

      result.forEach((country) =>
        expectMessage(
          Object.keys(country),
          `Country ${result.indexOf(country) + 1} has no continent.`
        ).toContain("continent")
      );
    });
  });

  describe("findOneCountry", () => {
    it("Should find Iceland in the 'worldAtlas' collection", async () => {
      expect.assertions(1);

      const worldAtlasCollection = await db.collection("worldAtlas");

      await worldAtlasCollection.insertMany(countries);

      const { stdout: result } = await execP(
        `mongo "${databaseUrl}" < src/findOneCountry.js`
      );

      expect(result).toMatch(`"name" : "Iceland"`);
    });

    it("Should not find another country than Iceland", async () => {
      expect.assertions(1);

      const worldAtlasCollection = await db.collection("worldAtlas");

      await worldAtlasCollection.insertMany(countries);

      const { stdout: result } = await execP(
        `mongo "${databaseUrl}" < src/findOneCountry.js`
      );

      expectMessage(
        result.match(/Germany|Italy|Belgium|France|Australia/),
        "Your shell command must search for Iceland only."
      ).toBe(null);
    });
  });

  describe("findManyCountries", () => {
    it("Should find all the Europe countries in the 'worldAtlas' collection", async () => {
      const worldAtlasCollection = await db.collection("worldAtlas");

      await worldAtlasCollection.insertMany(countries);

      const { stdout } = await execP(
        `mongo "${databaseUrl}" < src/findManyCountries.js`
      );

      const regex = /\{ "_id".+\}/gm;

      const result = stdout.match(regex);

      expect(result.length).toBe(5);

      result.forEach((country) =>
        expect(country.includes(`"continent" : "Europe"`)).toBe(true)
      );
    });
  });

  describe("updateOneCountry", () => {
    it("Should update the capital of Australia with 'Canberra'", async () => {
      expect.assertions(1);

      const worldAtlasCollection = await db.collection("worldAtlas");

      await worldAtlasCollection.insertMany(countries);

      await execP(
        `mongo "${databaseUrl}" < src/updateOneCountry.js`
      );

      const result = await worldAtlasCollection
        .find({ name: "Australia" })
        .toArray();

      expect(result[0].capital).toBe("Canberra");
    });
  });

  describe("updateManyCountries", () => {
    it("Should replace 'Europe' by 'EU' in all European countries", async () => {
      expect.assertions(1);

      const worldAtlasCollection = await db.collection("worldAtlas");

      await worldAtlasCollection.insertMany(countries);

      await execP(
        `mongo "${databaseUrl}" < src/updateManyCountries.js`
      );

      const result = await worldAtlasCollection
        .find({ continent: "EU" })
        .toArray();

      expect(result.length).toBe(5);
    });
  });

  describe("deleteOneCountry", () => {
    it("Should delete 'France' from the worldAtlas collection", async () => {
      expect.assertions(6);

      const worldAtlasCollection = await db.collection("worldAtlas");

      await worldAtlasCollection.insertMany(countries);

      await execP(
        `mongo "${databaseUrl}" < src/deleteOneCountry.js`
      );

      const result = await worldAtlasCollection.find().toArray();

      expect(result.length).toBe(5);

      result.forEach((country) => expect(country.name).not.toBe("France"));
    });
  });

  describe("deleteManyCountries", () => {
    it("Should delete all the 'EU' countries from the worldAtlas collection", async () => {
      expect.assertions(1);

      const worldAtlasCollection = await db.collection("worldAtlas");

      await worldAtlasCollection.insertMany(countries);

      await worldAtlasCollection.updateMany(
        { continent: "Europe" },
        { $set: { continent: "EU" } }
      );

      await execP(
        `mongo "${databaseUrl}" < src/deleteManyCountries.js`
      );

      const result = await worldAtlasCollection.find().toArray();

      expect(result.length).toBe(1);
    });
  });
});
