export const booksValidator = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        _id: { bsonType: "objectId" },
        title: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        author: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        description: {
          bsonType: "string",
          maxLength: 100,
          description: "must be a string of 100 characters max and is required",
        },
      },
      additionalProperties: false,
      required: ["_id", "author", "title", "description"],
    },
  },
};
