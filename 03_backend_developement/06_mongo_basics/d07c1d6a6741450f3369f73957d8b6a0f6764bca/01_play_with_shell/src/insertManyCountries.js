/* global db */
const newCountries = [
  {
    name: "Espagne",
    capital: "Madrid",
    continent: "Europe",
  },
  {
    name: "Belgique",
    capital: "Bruxels",
    continent: "Europe",
  },
  {
    name: "Allemagne",
    capital: "Berlin",
    continent: "Europe",
  },
];

db.worldAtlas.insertMany(newCountries);
// write your MongoDB shell command here
