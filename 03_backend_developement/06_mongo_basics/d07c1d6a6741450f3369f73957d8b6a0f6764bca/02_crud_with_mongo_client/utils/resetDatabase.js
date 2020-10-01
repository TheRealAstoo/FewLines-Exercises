/* global db */

const countries = [
  {
    name: "France",
    capital: "Paris",
    continent: "Europe",
  },
  {
    name: "Germany",
    capital: "Berlin",
    continent: "Europe",
  },
  {
    name: "Italy",
    capital: "Rome",
    continent: "Europe",
  },
  {
    name: "Belgium",
    capital: "Brussels",
    continent: "Europe",
  },
  {
    name: "Iceland",
    capital: "Reykjavik",
    continent: "Europe",
  },
  {
    name: "Australia",
    capital: "Sydney",
    continent: "Oceania",
  },
];


db.getCollectionInfos().forEach((c) => db[c.name].drop())

db.worldAtlas.insertMany(countries)
