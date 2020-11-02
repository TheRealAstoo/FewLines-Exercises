import * as fs from "fs";
import * as path from "path";
import * as Mongo from "mongodb";


const choseAFile = (aFile: string) => {
    
  const filePath = path.resolve(`data/${aFile}`);
  const stringifiedPlatform = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(stringifiedPlatform);

}


  const gba = choseAFile("gba.json")
  const n64 = choseAFile("n64.json")
  const nes = choseAFile("nes.json")

  const platforms = [gba, n64 ,nes ]


const dataImport = (db: Mongo.Db): Promise<any> => {

  
  

  return new Promise((resolve) => {
    resolve(db.createCollection("platform").then((platformCollection) => platformCollection.insertMany(platforms.forEach(element => element.name))));
  })
}


export default dataImport;