import * as mongo from "mongodb";

export function findOneCountry(db: mongo.Db) {
  return db.collection("worldAtlas").findOne({name: "Iceland"})
}

