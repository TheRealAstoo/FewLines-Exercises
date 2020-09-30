/* global db */
db.worldAtlas.updateMany({ continent: "Europe" }, { $set: { continent: "EU" } });

// write your MongoDB shell command here
