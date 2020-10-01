/* global db */

db.getCollectionInfos().forEach((c) => db[c.name].drop())
