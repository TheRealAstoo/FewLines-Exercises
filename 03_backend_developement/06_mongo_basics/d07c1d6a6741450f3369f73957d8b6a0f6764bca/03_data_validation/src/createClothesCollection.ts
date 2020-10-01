import * as mongo from "mongodb";

export const sweaterProperties = {
  required: ["_id", "name", "color", "category", "size"],
  additionalProperties: false,
  properties: {
    _id: {
      bsonType: "objectId",
      description: "must be an objectId and is required",
    },
    name: {
      bsonType: "string",
      maxLength: 30,
      description: "must be a string and is required (max 30 characters)",
    },
    color: {
      bsonType: "string",
      maxLength: 15,
      description: "must be a string and is required (max 15 characters)",
    },
    category: {
      bsonType: "string",
      enum: ["sweater"],
      description: "must be a string of sweater, pants or shoes and is required",
    },
    size: {
      bsonType: "string",
      additionalProperties: false,
      enum: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    },
  },
};

export const shoesProperties = {
  required: ["_id", "name", "color", "category", "size"],
  additionalProperties: false,
  properties: {
    _id: {
      bsonType: "objectId",
      description: "must be an objectId and is required",
    },
    name: {
      bsonType: "string",
      maxLength: 30,
      description: "must be a string and is required (max 30 characters)",
    },
    color: {
      bsonType: "string",
      maxLength: 15,
      description: "must be a string and is required (max 15 characters)",
    },
    category: {
      bsonType: "string",
      enum: ["shoes"],
      description: "must be a string of sweater, pants or shoes and is required",
    },
    material: {
      bsonType: "string",
      enum: ["leather", "textile", "synthetic"],
    },
    size: {
      bsonType: "int",
      additionalProperties: false,
      minimum: 30,
      maximum: 50,
    },
  },
};

export const pantsProperties = {
  required: ["_id", "name", "color", "category", "size"],
  additionalProperties: false,
  properties: {
    _id: {
      bsonType: "objectId",
      description: "must be an objectId and is required",
    },
    name: {
      bsonType: "string",
      maxLength: 30,
      description: "must be a string and is required (max 30 characters)",
    },
    color: {
      bsonType: "string",
      maxLength: 15,
      description: "must be a string and is required (max 15 characters)",
    },
    category: {
      bsonType: "string",
      enum: ["pants"],
      description: "must be a string of sweater, pants or shoes and is required",
    },
    size: {
      bsonType: "object",
      additionalProperties: false,
      required: ["width"],
      properties: {
        width: {
          bsonType: "int",
          minimum: 32,
          maximum: 46,
        },
        cut: {
          bsonType: "string",
          enum: ["slim", "skinny", "regular", "straight"]
        },
      },
    },
  }
};

export const clothesValidator = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      oneOf: [sweaterProperties,
        shoesProperties,
        pantsProperties
      ]
    },
  },
};

export function createClothesCollection(
  db: mongo.Db
): Promise<mongo.Collection> {
  return db.createCollection("clothes", clothesValidator);
}