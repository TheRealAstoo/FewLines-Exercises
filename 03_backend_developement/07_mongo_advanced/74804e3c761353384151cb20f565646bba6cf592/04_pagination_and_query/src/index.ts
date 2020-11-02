import { MongoClient } from "mongodb";
import initDatabase from "../utils/initDatabase";
import searchWithPagination from "./searchWithPagination";

initDatabase()
  .then((client: MongoClient) => {
    const db = client.db();
    searchWithPagination(db, { query: { name: /mario/i }, page: 3, resultsPerPage: 20 }).then((data) => {
      console.log(data);
      console.log(data.pageCount);
      console.log(data.results.length);
      client.close();
    });
  })
  .catch((e) => console.warn(e));
