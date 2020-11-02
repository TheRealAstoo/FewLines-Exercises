/* global db */

db.createUser({
  user: "mongo-advanced-app",
  pwd: "password",
  roles: [{ role: "readWrite", db: "mongo-advanced" }],
});
