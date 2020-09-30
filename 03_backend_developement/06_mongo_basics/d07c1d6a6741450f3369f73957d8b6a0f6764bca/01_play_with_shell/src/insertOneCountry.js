/* global db */
const country = {
  name: "France",
  capital: "Paris",
  continent: "Europe",
};

db.worldAtlas.insertOne(country);
// write your MongoDB shell command here
