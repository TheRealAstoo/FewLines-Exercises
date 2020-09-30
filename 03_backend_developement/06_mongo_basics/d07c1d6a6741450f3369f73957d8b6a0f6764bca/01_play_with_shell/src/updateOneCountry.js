/* global db */
db.worldAtlas.updateOne({ name: "Australia" }, { $set: { capital: "Canberra" } });

// write your MongoDB shell command here
