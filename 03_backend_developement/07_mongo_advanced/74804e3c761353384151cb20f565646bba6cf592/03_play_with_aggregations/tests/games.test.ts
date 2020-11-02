import * as mongoDb from "mongodb";
import { dropAll } from "./test-utils";
import dataImport from "../utils/dataImport";
import { search } from "../src/games";
import * as pipelines from "../src/pipelines";

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

    if (db) {
      await dropAll(db);
      await dataImport(db);
    }
  });
  afterAll(async () => {
    if (client) {
      await client.close();
    }
  });

  describe("#search", () => {
    it("Should return an array of results", async () => {
      expect.assertions(1);

      const marioQuery = { name: /mario/i };
      const marioGames = await search(db, marioQuery, []);

      expect(marioGames).toBeInstanceOf(Array);
    });

    it("Should take a query and return matching games", async () => {
      expect.assertions(2);

      const marioQuery = { name: /mario/i };
      const playsationGamesQuery = { platforms: { $in: [8, 9] } };

      const marioGames = await search(db, marioQuery, []);
      const marioGamesCount = marioGames.length;

      const playsationGames = await search(db, playsationGamesQuery, []);
      const playsationGamesCount = playsationGames.length;

      expect(marioGamesCount).toBe(28);
      expect(playsationGamesCount).toBe(1529);
    });

    it("Should take an aggregation pipeline and return the result of the aggregation", async () => {
      const marioQuery = { name: "Super Mario Bros. / Tetris / Nintendo World Cup" };
      const marioGames = await search(db, marioQuery, [
        {
          $project: { _id: false, name: true },
        },
      ]);

      expect(marioGames).toEqual([{ name: "Super Mario Bros. / Tetris / Nintendo World Cup" }]);
    });
  });

  describe("#pipelines", () => {
    describe("- thumbnailsAgg", () => {
      it("Should only return requested fields", async () => {
        const marioQuery = { name: "Super Mario Bros. / Tetris / Nintendo World Cup" };

        const expectedResult = [
          {
            name: "Super Mario Bros. / Tetris / Nintendo World Cup",
            summary: "A compilation of Super Mario Bros. / Tetris / Nintendo World Cup for NES",
            url: "https://www.igdb.com/games/super-mario-bros-slash-tetris-slash-nintendo-world-cup",
            coverUrl: "//images.igdb.com/igdb/image/upload/t_thumb/co22nv.jpg",
          },
        ];

        const result = await search(db, marioQuery, pipelines.thumbnailsAgg);
        expect(result).toEqual(expectedResult);
      });
    });

    describe("- groupedByPlatform", () => {
      it("Should only return one result per platform", async () => {
        const playsationGamesQuery = { platforms: { $in: [8, 9] } };

        const result = await search(db, playsationGamesQuery, pipelines.groupedByPlatform);
        expect(result.length).toBe(2);
      });

      test("Results should have a 'games' key", async () => {
        const playsationGamesQuery = { platforms: { $in: [8] } };

        const [psOne] = await search(db, playsationGamesQuery, pipelines.groupedByPlatform);

        expect(Object.keys(psOne)).toEqual(["_id", "games"]);
      });

      test("Results should contain the right number of games", async () => {
        const playsationGamesQuery = { platforms: { $in: [8] } };

        const [psOne] = await search(db, playsationGamesQuery, pipelines.groupedByPlatform);
        const count = (psOne as { games: {}[] }).games.length;

        expect(count).toEqual(1017);
      });
    });
  });
});
