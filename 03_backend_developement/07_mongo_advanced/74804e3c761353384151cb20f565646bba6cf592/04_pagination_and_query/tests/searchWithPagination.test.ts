import * as mongoDb from "mongodb";
import { dropAll } from "./test-utils";
import searchWithPagination from "../src/searchWithPagination";
import dataImport from "../utils/dataImport";

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

describe("#searchWithPagination", () => {
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
  beforeEach(async () => {});
  afterAll(async () => {
    if (client) {
      await client.close();
    }
  });

  it("Should have all requested properties", async () => {
    const data = await searchWithPagination(db, { query: { name: /mario/i }, page: 1, resultsPerPage: 20 });
    const requiredKeys = ["currentPage", "pageCount", "results", "resultsPerPage", "totalCount"];
    const dataKeys = Object.keys(data).sort();

    expect(dataKeys).toEqual(requiredKeys);
  });

  test("Each property should have the correct type of value", async () => {
    const query = { name: /mario/i };
    const count = await db.collection("games").find(query).count();
    const requestedPage = 3;
    const itemsPerPage = 20;
    const numberOfPage = Math.ceil(count / itemsPerPage);

    const data = await searchWithPagination(db, { query, page: requestedPage, resultsPerPage: itemsPerPage });
    const { currentPage, pageCount, results, resultsPerPage, totalCount } = data;

    expect(currentPage).toBe(requestedPage);
    expect(pageCount).toBe(numberOfPage);
    expect(Array.isArray(results)).toBeTruthy();
    expect(results).toHaveLength(4);
    expect(resultsPerPage).toEqual(20);
    expect(totalCount).toBe(count);
  });

  it("Should have 3 pages of 'Mario' games when 20 results per page", async () => {
    const data = await searchWithPagination(db, { query: { name: /mario/i }, page: 1, resultsPerPage: 20 });
    expect(data.pageCount).toBe(3);
  });

  it("Should have 44 'Mario' games", async () => {
    const data = await searchWithPagination(db, { query: { name: /mario/i }, page: 1, resultsPerPage: 1000 });
    expect(data.results).toHaveLength(44);
  });
});
