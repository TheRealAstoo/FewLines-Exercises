import * as mongo from "mongodb";

export function updateOneCountry(db: mongo.Db) {
  return db.collection("worldAtlas").updateOne({ name: "Australia" }, { $set: { capital: "Canberra" } })
  .then(() => db.collection("worldAtlas").findOne({name: "Australia"}))
}
