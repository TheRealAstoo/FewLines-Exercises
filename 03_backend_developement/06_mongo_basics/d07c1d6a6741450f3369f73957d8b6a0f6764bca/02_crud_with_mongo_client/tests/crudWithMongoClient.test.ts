import * as mongoDb from "mongodb";
import { countries } from "../utils/countries";
import { findManyCountries } from "../src/findManyCountries";
import { findOneCountry } from "../src/findOneCountry";
import { deleteManyCountries } from "../src/deleteManyCountries";
import { deleteOneCountry } from "../src/deleteOneCountry";
import { dropAll } from "./test-utils";
import { insertOneCountry } from "../src/insertOneCountry";
import { isArray, isObject } from "util";
import { insertManyCountries } from "../src/insertManyCountries";
import { updateManyCountries } from "../src/updateManyCountries";
import { updateOneCountry } from "../src/updateOneCountry";

const databaseUrl =
  process.env.MONGODB_DATABASE_URL ||
  "mongodb://mongo-basics-app:password@localhost:27016/mongo-basics";

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

  const countryKeys = ["_id", "name", "capital", "continent"];

  beforeAll(async () => {
    try {
      client = await initDatabase();
      db = client.db();
    } catch(error) {
      console.log("Can't log to MongoDB Server, did you start it?");
    }
  });
  beforeEach(async () => {
    if (db) {
      await dropAll(db);
      await db.collection("worldAtlas").insertMany(countries);
    }
  })
  afterAll(async () => {
    if (client) {
      await client.close();
    }
  });

  describe("findOneCountry", () => {
    it("Should return an object", async () => {
      await findOneCountry(db).then((result) => {
        expect(isObject(result)).toBe(true);
      });
    });

    it("Should return Iceland from the 'worldAtlas' collection", async () => {
      await findOneCountry(db).then((result) => {
        const icelandValues = ["Iceland", "Reykjavik", "Europe"];

        expect(Object.keys(result)).toContain("_id");

        icelandValues.forEach((value) => {
          expect(Object.values(result)).toContain(value);
        });
      });
    });
  });

  describe("findManyCountries", () => {
    it("Should return an array of country objects", async () => {
      await findManyCountries(db).then((result) => {
        expect(isArray(result)).toBe(true);

        result.forEach((country) => {
          expect(isObject(country)).toBe(true);

          countryKeys.forEach((key) => {
            expect(Object.keys(country)).toContain(key);
          });
        });
      });
    });

    it("Should return all the european countries from the 'worldAtlas' collection", async () => {
      await findManyCountries(db).then((result) => {
        expect(result.length).toBe(5);

        result.forEach((country) => {
          expect(Object.values(country)).toContain("Europe");
          expect(Object.values(country)).not.toContain("Oceania");
        });
      });
    });
  });

  describe("insertOneCountry", () => {
    it("Should insert a new country in the 'worldAtlas' collection", async () => {
      await insertOneCountry(db).then(async () => {
        expect(
          (await db.collection("worldAtlas").find().toArray()).length
        ).toBe(7);
      });
    });

    it("Should return an object", async () => {
      await insertOneCountry(db).then((result) => {
        expect(isObject(result)).toBe(true);
      });
    });

    it("Should return the inserted country", async () => {
      await insertOneCountry(db).then(async (result) => {
        const lastEntry = (
          await db.collection("worldAtlas").find().sort({ _id: 1 }).toArray()
        ).pop();

        expect(result).toEqual(lastEntry);
      });
    });
  });

  describe("insertManyCountries", () => {
    it("Should insert at least 2 new coutnries in the 'worldAtlas' collection", async () => {
      await insertManyCountries(db).then(async () => {
        expect(
          (await db.collection("worldAtlas").find().toArray()).length > 7
        ).toBe(true);
      });
    });

    it("Should return an array of country objects", async () => {
      await insertManyCountries(db).then((result: any[]) => {
        expect(isArray(result)).toBe(true);

        result.forEach((country) => {
          expect(isObject(country)).toBe(true);

          countryKeys.forEach((key) => {
            expect(Object.keys(country)).toContain(key);
          });
        });
      });
    });

    it("Should return all the inserted countries", async () => {
      await insertManyCountries(db).then(async (result) => {
        const lastEntries = (
          await db.collection("worldAtlas").find().sort({ _id: 1 }).toArray()
        ).slice(6);

        expect(result).toEqual(lastEntries);
      });
    });
  });

  describe("updateOneCountry", () => {
    it("Should update the capital of Australia", async () => {
      await updateOneCountry(db).then(async () => {
        const australia = await db
          .collection("worldAtlas")
          .findOne({ name: "Australia" });

        expect(australia.capital).toBe("Canberra");
      });
    });

    it("Should return an object", async () => {
      await updateOneCountry(db).then((result) => {
        expect(isObject(result)).toBe(true);
      });
    });

    it("Should return the updated country", async () => {
      await updateOneCountry(db).then(async (result) => {
        const updatedCountry = await db
          .collection("worldAtlas")
          .findOne({ capital: "Canberra" });

        expect(result).toEqual(updatedCountry);
      });
    });
  });

  describe("updateManyCountries", () => {
    it("Should update all the european countries continent name with 'EU'", async () => {
      await updateManyCountries(db).then(async () => {
        const europeanCountries = await db
          .collection("worldAtlas")
          .find({ continent: "EU" })
          .toArray();

        expect(europeanCountries.length).toBe(5);
      });
    });

    it("Should return an array of country objects", async () => {
      await updateManyCountries(db).then((result) => {
        expect(isArray(result)).toBe(true);

        result.forEach((country) => {
          expect(isObject(country)).toBe(true);

          countryKeys.forEach((key) => {
            expect(Object.keys(country)).toContain(key);
          });
        });
      });
    });

    it("Should return all the updated countries", async () => {
      await updateManyCountries(db).then(async (result) => {
        const updatedCountries = await db
          .collection("worldAtlas")
          .find({ continent: "EU" })
          .toArray();

        expect(
          updatedCountries.forEach((updatedCountry) => {
            result.includes(updatedCountry);
          })
        );

        expect(
          result.forEach((resultCountry) => {
            updatedCountries.includes(resultCountry);
          })
        );
      });
    });
  });

  describe("deleteOneCountry", () => {
    it("Should delete `France` from the `worldAtlas` collection", async () => {
      await deleteOneCountry(db).then(async () => {
        expect(
          await db.collection("worldAtlas").findOne({ name: "France" })
        ).toBe(null);
      });
    });

    it("Should not delete any other country", async () => {
      await deleteOneCountry(db).then(async () => {
        expect(
          (await db.collection("worldAtlas").find().toArray()).length
        ).toBe(5);
      });
    });

    it("Should return true when deletion is successfull", async () => {
      await deleteOneCountry(db).then((result) => {
        expect(result).toBe(true);
      });
    });

    it("Should return false when deletion isn't successfull", async () => {
      await deleteOneCountry(db).then(async () => {
        await deleteOneCountry(db).then(async (result) => {
          expect(result).toBe(false);
        });
      });
    });
  });

  describe("deleteManyCountries", () => {
    it("Should delete all the european countries from the `worldAtlas` collection", async () => {
      await deleteManyCountries(db).then(async () => {
        await db
          .collection("worldAtlas")
          .find({ continent: "Europe" })
          .toArray()
          .then((result) => {
            expect(result).toEqual([]);
          });
      });
    });

    it("Should not delete any non european country", async () => {
      await deleteManyCountries(db).then(async () => {
        expect(
          (await db.collection("worldAtlas").find().toArray()).length
        ).toBe(1);
      });
    });

    it("Should return true when deletion is successfull", async () => {
      await deleteManyCountries(db).then((result) => {
        expect(result).toBe(true);
      });
    });

    it("Should return false when deletion isn't successfull", async () => {
      await deleteManyCountries(db).then(async () => {
        await deleteManyCountries(db).then(async (result) => {
          expect(result).toBe(false);
        });
      });
    });
  });
});
