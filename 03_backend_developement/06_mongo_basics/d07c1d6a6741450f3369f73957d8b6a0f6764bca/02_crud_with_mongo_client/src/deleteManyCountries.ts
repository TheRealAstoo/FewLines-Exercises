import * as mongo from "mongodb";

export function deleteManyCountries(db: mongo.Db): Promise<boolean> {
  return db.collection("worldAtlas").find({continent: "Europe"}).count().then(countries => {
    return db.collection("worldAtlas").deleteMany({continent: "Europe"}).then(result => {
      if (countries !== 0) {
        return result.deletedCount === countries
      } else {
        return false
      }
    })
  })
}
