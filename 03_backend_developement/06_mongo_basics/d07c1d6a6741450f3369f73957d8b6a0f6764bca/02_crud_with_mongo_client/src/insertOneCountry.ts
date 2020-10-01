import * as mongo from "mongodb";

const newCountry = {
  name: "Italy",
  capital: "Rome",
  continent: "Europe",
}
export function insertOneCountry(db: mongo.Db) {
  return db.collection("worldAtlas").insertOne(newCountry).then((result) => result.ops[0])
}
