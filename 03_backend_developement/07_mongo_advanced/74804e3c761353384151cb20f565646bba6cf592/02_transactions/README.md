# Transactions

Transactions are useful when we want to be sure that all went well before validating the modifications when we do CRUD database operations.

## Specs

In this exercise you're provided with some users and posts data:

```typescript
// a user
{
  _id: "5f6a47ce6ec9745e8856e432",
  firstName: "Talon",
  lastName: "Skiles",
},

// a post
{
  author: {
    _id: "5f6a47ce6ec9745e8856e432",
    name: "Talon Skiles",
  },
  title: "Inventore ... tur.",
  content: "Ut nihil ... hic.",
},
```
As you can see, each post stores some information about its author, meaning that if you update the user, you will have to update all his posts accordingly: change `author.name` to the new fullname.

### Before starting

⚠️⚠️ **Remember !** To use _transactions_ we need replicas and to have replicas, you have tu run this in your terminal ⚠️⚠️

```
echo 'rs.initiate()' | mongo -u admin -p password
echo 'rs.initiate()' | mongo -u admin -p password --port 27016
```

To populate your database with users and posts, OR reset the database to its inital state, run:

```bash
yarn db:init
```

### Update author

Your job in this exercise is to code the `updateAuthor` function in `src/updateAuthor.ts`. It accepts three arguments:

- `client`: the MongoDb client.
- `id`: the `_id` of the user you must update.
- `data`: an object like this: `{ firstName: "", lastName: "" }`

The functions is used like this in `src/index.ts`:

```typescript
updateAuthor(client, "5f6a47ce6ec9745e8856e432", {
  firstName: "Jon",
  lastName: "Doe",
}).then(() => {
  console.log("Update done");
  client.close();
});
```

In this function you will have to start a session in order to make a transaction

### Update posts

You also need to code the function which will update the posts!
Look in `src/updatePosts.ts` where you have to code the body of the function.

This function need to be used in updateAuthor: you will have to provide it with four arguments:

- `db`: the MongoDb database.
- `id`: the author id.
- `data`: the data used to update the user (`{ firstName: "", lastName: "" }`).
- `session`: the session you started for the transaction.

```typescript
updatePosts(db, id, data, session)
```

⚠️ Leave the condition with `error.isPresent()` otherwise your code won't pass tests ⚠️

## Tests

As always, `yarn test` to test, and you can use `yarn start` to try your code (after you read the `src/index.ts` file of course 😉).
