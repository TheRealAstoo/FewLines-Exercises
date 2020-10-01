import * as mongo from "mongodb";

export function deleteOneCountry(db: mongo.Db): Promise<any> {
  return db.collection("worldAtlas").deleteOne({ name: "France" })
  .then(result => result.deletedCount === 1)
}