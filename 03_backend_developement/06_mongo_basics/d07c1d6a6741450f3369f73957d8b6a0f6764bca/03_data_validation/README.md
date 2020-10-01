# DATA VALIDATION

## CONTEXT AND OBJECTIVES

Until now you could insert any formated document in the MongoDB collections you worked with. When developing a _"real world"_ application, we often need documents to follow some validations to avoid all kind of problems related to data consistency.

The goal of this exercise is to write specific validators for several collections.

🔎You will probably have to check the MongoDB [Schema](https://docs.mongodb.com/manual/core/schema-validation/index.html) and [$jsonSchema](https://docs.mongodb.com/manual/reference/operator/query/jsonSchema/#jsonschema-keywords) documentations.

## SPECS

In each file, you have to code your validator in an dedicated variable which will be passed as second argument to the `createCollection()` function:

- `createBooksCollection.ts`:

  A book should have **only**:
  
    - **required** field `_id` which can be **only** an `objectId`
    - **required** field `title` which can be **only** a `string`
    - **required** field `author` which can be **only** a `string`
    - **required** field `description` which can be **only** a `string` of _100 characters max_


- `createMoviesCollection.ts`:

  A movie should have **only**:

    - **required** field `_id` which can be **only** an `objectId`

    - **required** field `title` which can be **only** a `string`

    - **required** field `genre` which can be **only** a `string` in: `action`, `comedy`, `dramatic`, `horror` or `romance`

    - **required** field`year` which can be **only** a `integer` between `1950` and `2020`

    - **optional** field `ratings` which can be **only** an `object` with two fields:
        - **required** field `pressRating` which can be **only** an `integer` between `1` and `5`
        - **required** field `spectatorsRating` which can be **only** an `integer` between `1` and `5`

- `createClothesCollection.ts`:

  A item of clothes should have **only**:

    - **required** field `_id` which can be **only** an `objectId`

    - **required** field `name` which can be **only** a `string` of _30 characters max_

    - **required** field `color` which can be **only** a `string` of _15 characters max_

    - **required** field `category` which can be **only** a `string` in: `sweater`, `pants` or `shoes`

    - **required** field `size`:
      - if the category is `sweater`, it can be **only** a `string` in: `XXS`, `XS`, `S`, `M`, `L`, `XL`, `XXL`, or `XXXL`
      - if the category is `shoes`, it can be **only** a `integer` between `30` and `50`
      - if the category is `pants`, it can be **only** an `object` with two properties: 
        * **required** field `width` which can be **only** a `integer` between `32` and `46`
        * **optional** field `cut` which can be **only** a `string` in: `slim`, `skinny`, `regular`, or `straight`


  With the `shoes` category, the product can have an **optional** field `material` which can be **only** a `string` in: `leather`, `textile`, or `synthetic`.

  > 🔎 For this one, you will need to write each category properties in separated variables and then call them using the **`oneOf`** keyword with your `$jsonSchema` (in case of emergency, remember search engines are your best friends 😉).

Each of those files can be manually tested in `src/index.ts`, by placing it instead of `showCollections`, and then running `yarn start` (do not forget to `docker-compose up` before). The Database will be reset between each run.

> Do not hesitate to play manually with your DB: `mongo mongo-basics -u mongo-basics-app -p password`.
