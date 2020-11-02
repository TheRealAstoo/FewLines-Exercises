# Import data

Importing data from a json file is a quite common task to do. Then we often need to store the imported data in a database.

## Specs

Look in the `data` folder. You will find three json files, each one containing a game console and its games!

Each platform has many keys and one of them is the games related to it, pretty much like this:

```js
{
  id: 24,
  abbreviation: "GBA",
  alternative_name: "GBA",
  name: "Game Boy Advance",
  platform_logo: {...},
  slug: "gba",
  versions: [...],
  games: [...], // 👈
  // and additional keys that doesn't matter for now
};
```

A game is formed like this:

```js
{
  id: 49314,
  name: "some game title",
  platforms: [24],
  collection: {...},
  release_dates: [...],
  first_release_date: 1033603200,
  cover: {...},
  genres: [...],
  // and additional keys that doesn't matter for now
};
```

### Read data from files

In the `src/dataImport.ts`, code a function that read data from the `.json` files in the `data` folder.
To do that, you can use:

```typescript
const fileName = "the name of the file";
const filePath = path.resolve(`data/${fileName}`);
const stringifiedPlatform = fs.readFileSync(filePath, "utf-8");
const platform = JSON.parse(stringifiedPlatform);
```
> Try this code to see it in action!

### Write data in database

When you have the three platforms, it's time to add data in the MongoDb database.

We want to create two collections:
- one `platforms` collection.
- one `games` collection.

One thing to have in mind tho: don't write games two times in the db! (one time in the games collection and one time inside the platforms).

You should **extract the `games` key of the platforms** and add them into one `games` collection.

### Tests

Run tests with `yarn test`.
