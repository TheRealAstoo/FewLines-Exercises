# Pagination and query

## Context and objectives

Look at different e-commerce websites. When we search for products, we don't get the whole list on a single page! We will have 10, 20 products per page, and the total count of products divided by the number of products per page will result in the number of page.

That's what we call _pagination_.

## Specs

You need to complete the `searchWithPagination` function in `src/searchWithPagination.ts`.

You are provided with types, already written at the top of the file and the function is also already typed to help you code it. What it tells you is what the functions takes as parameter (and their type) and what is should return.

For example, calling the function like this:

```typescript
const query = { name: /mario/i };
const page = 3;
const resultsPerPage = 20;

searchWithPagination(db, { query, page, resultsPerPage }).then((data) => {
  console.log(data);
  client.close();
});
```

Will print something like that:

```typescript
{
  totalCount: 44,
  resultsPerPage: 20,
  currentPage: 3,
  pageCount: 3,
  results: [
    // Here are your games!
    { ... },
    { ... },
    { ... },
    { ... },
  ]
}
```
> We know that we have **44 `mario` games**. The results are split in **3 pages**, so first and second pages count 20 results, the third one count 4.

⚠️⚠️ Use the types given to you to help you code the function 😉.

## Tests

As usual, use `yarn test` to test and `yarn start` to manually test 😎.
