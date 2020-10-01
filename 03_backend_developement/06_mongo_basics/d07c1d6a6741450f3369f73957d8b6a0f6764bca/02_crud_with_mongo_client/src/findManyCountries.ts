import * as mongo from "mongodb";

export function findManyCountries(db: mongo.Db) {
  return db.collection("worldAtlas").find({continent: "Europe"}).toArray()
}
