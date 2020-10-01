import * as mongo from "mongodb";

export function showCollections(db: mongo.Db): Promise<string[]> {
  return db.listCollections().toArray();
}
