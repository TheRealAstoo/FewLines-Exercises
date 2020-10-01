import * as mongo from "mongodb";

const newCountries = [
  {
    name: "Italy",
    capital: "Rome",
    continent: "Europe",
  },
  {
    name: "Italy",
    capital: "Rome",
    continent: "Europe",
  },
  {
    name: "Italy",
    capital: "Rome",
    continent: "Europe",
  },
  {
    name: "Italy",
    capital: "Rome",
    continent: "Europe",
  },
]

export function insertManyCountries(db: mongo.Db) {
  return db.collection("worldAtlas").insertMany(newCountries).then(() => newCountries)
}
