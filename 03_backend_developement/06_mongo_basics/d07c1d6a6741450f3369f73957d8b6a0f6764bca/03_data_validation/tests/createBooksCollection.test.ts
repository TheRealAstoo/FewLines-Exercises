import { booksValidator } from "../src/createBooksCollection";

describe("booksValidator", () => {
  it("Should be an object", () => {
    expect(booksValidator.validator.$jsonSchema.bsonType).toBe("object");
  });

  it("Should not accept additional properties", () => {
    expect(booksValidator.validator.$jsonSchema.additionalProperties).toBe(
      false
    );
  });

  describe("_id", () => {
    it("Should be required", () => {
      expect(booksValidator.validator.$jsonSchema.required).toContain("_id");
    });

    it("Should be only an 'objectId'", () => {
      expect(booksValidator.validator.$jsonSchema.properties._id.bsonType).toBe(
        "objectId"
      );
    });
  });

  describe("title", () => {
    it("Should be required", () => {
      expect(booksValidator.validator.$jsonSchema.required).toContain("title");
    });

    it("Should be only a 'string'", () => {
      expect(
        booksValidator.validator.$jsonSchema.properties.title.bsonType
      ).toBe("string");
    });
  });

  describe("author", () => {
    it("Should be required", () => {
      expect(booksValidator.validator.$jsonSchema.required).toContain("author");
    });

    it("Should be only a 'string'", () => {
      expect(
        booksValidator.validator.$jsonSchema.properties.author.bsonType
      ).toBe("string");
    });
  });

  describe("description", () => {
    it("Should be required", () => {
      expect(booksValidator.validator.$jsonSchema.required).toContain(
        "description"
      );
    });

    it("Should be only an 'string'", () => {
      expect(
        booksValidator.validator.$jsonSchema.properties.description.bsonType
      ).toBe("string");
    });

    it("Should be only a 'string'", () => {
      expect(
        booksValidator.validator.$jsonSchema.properties.description.bsonType
      ).toBe("string");
    });

    it("Should be 100 characters max", () => {
      expect(
        booksValidator.validator.$jsonSchema.properties.description.maxLength
      ).toBe(100);
    });
  });
});
