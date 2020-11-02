import { MongoClient } from "mongodb";
import initDatabase from "../utils/initDatabase";
import { search } from "./games";
import * as pipelines from "./pipelines";

initDatabase()
  .then((client: MongoClient) => {
    const db = client.db();
    const query = {
      name: /mario/i, // 👈 We search for "mario" case insensitive
    };
    // Uncomment 👇 to try your "thumbnail" aggregation
    // search(db, query, pipelines.thumbnailsAgg).then((games) => {
    //   console.log(games);
    //   console.log("Games count: ", games.length);
    //   client.close();
    // });

    // Uncomment 👇 to try your "grouped by platform" aggregation
    // search(db, query, pipelines.groupedByPlatform).then((gamesByPlatform) => {
    //   console.log(gamesByPlatform);
    //   console.log("Group count: ", gamesByPlatform);
    //   client.close();
    // });
  })
  .catch((e) => console.warn(e));
