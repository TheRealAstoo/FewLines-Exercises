# Index signature

## Context and objectives

In JavaScript, it is very common to create an object and add properties on the fly:

```ts
const myObject = {};

myObject.foo = "bar";
console.log(myObject.foo); // "bar"
```

While this is very convenient, it would be great to add more security, through types. Can you find a way to type this object, while keeping its flexibility?

```ts
// i.e. don't do this !
type MyType = {
  foo: string;
};
```

## Specs

You want to manage your supplies. You don't know in advance what kind of supply you will add, but you know that the value will be the number of item you have.

Complete the `Supplies` type to be able to add key/values pairs without changing it each time you add a new key/value in the `supplies` object.
