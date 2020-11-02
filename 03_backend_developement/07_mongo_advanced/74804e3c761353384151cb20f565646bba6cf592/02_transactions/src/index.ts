import initDatabase from "../utils/initDatabase";
import updateAuthor from "./updateAuthor";
import { MongoClient } from "mongodb";

let client: MongoClient;
initDatabase()
  .then((mongoClient) => {
    client = mongoClient;
    return updateAuthor(mongoClient, "5f6a47ce6ec9745e8856e432", {
      firstName: "Jon",
      lastName: "Doe",
    }).then(() => console.log("Update done"));
  })
  .catch(() => console.log("Update canceled"))
  .finally(() => client.close());
