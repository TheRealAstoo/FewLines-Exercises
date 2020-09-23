# E-Commerce Regex

E-commerce websites sell a lot of product.

Really.

A lot.

Because there's so much choice, it is our duty, as developers, to provide customers with search functionalities, so they can find products quickly.

## Specs

In `src/eCommerce/shop.js`, complete the `searchArticles` function.

As you can see in `src/eCommerce/data/products.js`, you don't have less than 10 products anymore. Now you have hundreds of them!
It is mandatory to provide the users with a search functionality.

It must take a string as a parameter and use this string to create a **regex**. [Read here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Creating_a_regular_expression) to learn how to do it!

Then, it must search in the articles and return an array with the matching products, like this:

```javascript
const initShop = require("./eCommerce/shop");

const shop = initShop();

const xxsArticles = shop.searchArticles("XXS");
const blackClothes = shop.searchArticles("black");

console.log(xxsArticles)
/** 
...
{ label: 'pull turtle neck blue size: XXS', price: 43, quantity: 47 },
{ label: 'pull tie & dye pink size: XXS', price: 32, quantity: 33 },
{ label: 'pull turtle neck pink size: XXS', price: 24, quantity: 70 },
{ label: 'pull V-neck white size: XXS', price: 69, quantity: 49 },
{ label: 'pull V-neck yellow size: XXS', price: 49, quantity: 69 },
...
*/

console.log(blackClothes)
/**
{ label: 'pull tie & dye black size: XXL', price: 49, quantity: 72 },
{ label: 'pull V-neck black size: XXL', price: 21, quantity: 36 },
{ label: 'pull V-neck black size: XXL', price: 57, quantity: 64 },
{ label: 'pull V-neck black size: XXL', price: 61, quantity: 69 },
{ label: 'pull V-neck black size: XXL', price: 29, quantity: 31 },
*/
```

Then, why not try to add it to your eCommerce program? 😁

## Tests

There's no `yarn test`! But feel free to use `yarn start` to manually test your code.
