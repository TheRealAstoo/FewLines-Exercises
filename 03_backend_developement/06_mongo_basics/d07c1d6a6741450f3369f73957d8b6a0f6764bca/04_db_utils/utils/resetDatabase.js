/* global db */

db.getCollectionInfos().forEach((c) => db[c.name].drop())

const users = [
  {
    firstName: "Jean",
    lastName: "Bonbeurre",
    age: 20,
  },
  {
    firstName: "John",
    lastName: "Doeuf",
    age: 20,
  },
  {
    firstName: "Bill",
    lastName: "Boquet",
    age: 20,
  },
];

db.users.insertMany(users)
