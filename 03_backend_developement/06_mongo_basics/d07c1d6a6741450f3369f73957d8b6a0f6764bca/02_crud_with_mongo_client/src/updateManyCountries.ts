import * as mongo from "mongodb";

export function updateManyCountries(db: mongo.Db) {
  return db.collection("worldAtlas").updateMany({ continent: "Europe" }, { $set: { continent: "EU" } })
  .then(() => db.collection("worldAtlas").find({continent: "EU"}).toArray())
}
