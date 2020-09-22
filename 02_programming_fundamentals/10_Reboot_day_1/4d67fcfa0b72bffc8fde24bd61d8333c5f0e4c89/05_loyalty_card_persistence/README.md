# Loyalty Card Manager persistence

## Context and objectives

Today you wrote a program which handle loyalty cards for customers.
Right now, if we stop the program, all the generated data is lost because it is loaded and managed in the program memory.

What you need now is **persistence**: a way to store the data in a file.

## Specs

Take the code from your loyalty card program and try to make it work in this exercise (Copy / Paste will be your friends here 😉).
Then you need two new functionalities:

### Load data

When your program starts, it has to load the data coming from a file.
Create the file `src/data/customers` and paste this inside:

```json
[
  {
    "id": "43784629-a4d8-4471-84c4-464d3a5822de",
    "firstName": "Alice",
    "lastName": "Cooper",
    "email": "alice.cooper@fake.local",
    "birthDate": "01/14/1959",
    "purchaseHistory": [
      [
        "12/12/2000",
        200
      ],
      [
        "12/12/2001",
        400
      ],
      [
        "12/12/2002",
        600
      ],
      [
        "13/09/2020",
        329
      ],
      [
        "13/09/2020",
        400
      ]
    ],
    "usedFidelityPoints": 0,
    "fidelityPoints": 96.45,
    "address": {
      "city": "New York",
      "country": "United States of America"
    }
  },
  {
    "id": "af7bce0f-0f44-4b54-b333-7ea46ddb5b3d",
    "firstName": "Bob",
    "lastName": "Sponge",
    "email": "sponge.bob@fake.local",
    "birthDate": "26/05/1932",
    "purchaseHistory": [
      [
        "13/09/2020",
        1200
      ]
    ],
    "usedFidelityPoints": 0,
    "fidelityPoints": 60,
    "address": {
      "city": "Atlantis",
      "country": "Deepsea"
    }
  },
  {
    "id": "9a5ef4e4-1c5c-42c1-8d5d-e9cfcdadce79",
    "firstName": "Charlie",
    "lastName": "Andthechocolatefactory",
    "email": "charlie.andthechocolatefactory@fake.local",
    "birthDate": "03/08/1946",
    "purchaseHistory": [],
    "usedFidelityPoints": 0,
    "fidelityPoints": 0,
    "address": {
      "city": "",
      "country": ""
    }
  }
]
```
> Once the file is open, you will get a string version of this data. Look at `JSON.parse` **[documentation](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON/parse)** to transform it into a usable data type.

When starting your program, you should now have access to those customers.

### Save data

When you add a customer or a new purchase in a customer's history, you have to save those changes.

To do so, write the data in the file as explain in the course. The point here is that **you need to transform your data** into a string. Look at the `JSON.stringify` **[documentation](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON/stringify)** to learn how to do it.

**One important thing to note**: don't try to add data at the end of the file. It won't work, so you will have to **overwrite** the entire file each time.


## Tests

There are no tests! It should just work 😁
