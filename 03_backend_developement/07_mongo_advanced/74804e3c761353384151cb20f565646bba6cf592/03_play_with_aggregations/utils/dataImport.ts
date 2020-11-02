import * as fs from "fs";
import { Db } from "mongodb";
import * as path from "path";

type Game = Record<string, unknown>;

type Platform = Record<string, unknown>;

const formatData = (jsonPlatforms: Platform[]): [Game[], Platform[]] => {
  let games: Game[] = [];
  let platforms: Platform[] = [];

  jsonPlatforms.forEach((data) => {
    const { games: jsonGames, ...jsonPlatform } = data;
    games = [...games, ...(jsonGames as Game[])];
    platforms = [...platforms, jsonPlatform as Platform];
  });

  return [games, platforms];
};

export default (db: Db): Promise<boolean> => {
  const dataPath = path.resolve("data");
  const sourceFiles = fs.readdirSync(dataPath).map((fileName) => path.resolve(`data/${fileName}`));

  const rawData = sourceFiles.map((file) => {
    const rawJson = fs.readFileSync(file, "utf-8");
    return JSON.parse(rawJson);
  });

  const [games, platforms] = formatData(rawData);

  return db
    .collection("games")
    .insertMany(games)
    .then(() =>
      db
        .collection("platforms")
        .insertMany(platforms)
        .then(() => true),
    )
    .catch(() => false);
};
