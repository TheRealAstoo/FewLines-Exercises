import * as mongo from "mongodb";
import dataImport from "./dataImport";
import { dropAll } from "../tests/test-utils";

export default function initDatabase(
  databaseUrl = `mongodb://mongo-advanced-app:password@localhost:27017/mongo-advanced`,
  options = { useNewUrlParser: true, useUnifiedTopology: true },
): Promise<mongo.MongoClient> {
  return new Promise((resolve, reject) => {
    mongo.MongoClient.connect(databaseUrl, options, function (error, client) {
      if (error) {
        reject(error);
      } else {
        dropAll(client.db()).then(() => {
          dataImport(client.db()).then(() => resolve(client));
        });
      }
    });
  });
}
