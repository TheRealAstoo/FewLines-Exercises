import { moviesValidator } from "../src/createMoviesCollection";

describe("moviesValidator", () => {
  it("Should be an object", () => {
    expect(moviesValidator.validator.$jsonSchema.bsonType).toBe("object");
  });

  it("Should not accept additional properties", () => {
    expect(moviesValidator.validator.$jsonSchema.additionalProperties).toBe(
      false
    );
  });

  describe("_id", () => {
    it("Should be required", () => {
      expect(moviesValidator.validator.$jsonSchema.required).toContain("_id");
    });

    it("Should be only an 'objectId'", () => {
      expect(
        moviesValidator.validator.$jsonSchema.properties._id.bsonType
      ).toBe("objectId");
    });
  });

  describe("title", () => {
    it("Should be required", () => {
      expect(moviesValidator.validator.$jsonSchema.required).toContain("title");
    });

    it("Should be only a 'string'", () => {
      expect(
        moviesValidator.validator.$jsonSchema.properties.title.bsonType
      ).toBe("string");
    });
  });

  describe("genre", () => {
    it("Should be required", () => {
      expect(moviesValidator.validator.$jsonSchema.required).toContain("genre");
    });

    it(`Should be only a 'string' in ["action", "comedy", "dramatic", "horror"]`, () => {
      const validatorEnum =
        moviesValidator.validator.$jsonSchema.properties.genre.enum;

      const acceptedValues = [
        "action",
        "comedy",
        "dramatic",
        "horror",
        "romance",
      ];

      validatorEnum.forEach((value) => {
        expect(acceptedValues).toContain(value);
      });
    });
  });

  describe("year", () => {
    it("Should be required", () => {
      expect(moviesValidator.validator.$jsonSchema.required).toContain("year");
    });

    it("Should be only an 'integer' between 1950 and 2020", () => {
      expect(
        moviesValidator.validator.$jsonSchema.properties.year.bsonType
      ).toBe("int");
      expect(
        moviesValidator.validator.$jsonSchema.properties.year.minimum
      ).toBe(1950);
      expect(
        moviesValidator.validator.$jsonSchema.properties.year.maximum
      ).toBe(2020);
    });
  });

  describe("ratings", () => {
    it("Should be optional", () => {
      expect(moviesValidator.validator.$jsonSchema.required).not.toContain(
        "ratings"
      );
    });

    it("Should be only an 'object'", () => {
      expect(
        moviesValidator.validator.$jsonSchema.properties.ratings.bsonType
      ).toBe("object");
    });

    it("Should not accept additional keys", () => {
      expect(
        moviesValidator.validator.$jsonSchema.properties.ratings
          .additionalProperties
      ).toBe(false);
    });

    describe("pressRating", () => {
      it("Should be required", () => {
        expect(
          moviesValidator.validator.$jsonSchema.properties.ratings.required
        ).toContain("pressRating");
      });

      it("Should be an 'integer' between 1 and 5", () => {
        expect(
          moviesValidator.validator.$jsonSchema.properties.ratings.properties
            .pressRating.bsonType
        ).toBe("int");
        expect(
          moviesValidator.validator.$jsonSchema.properties.ratings.properties
            .pressRating.minimum
        ).toBe(1);
        expect(
          moviesValidator.validator.$jsonSchema.properties.ratings.properties
            .pressRating.maximum
        ).toBe(5);
      });
    });

    describe("spectatorsRating", () => {
      it("Should be required", () => {
        expect(
          moviesValidator.validator.$jsonSchema.properties.ratings.required
        ).toContain("pressRating");
      });

      it("Should be only an 'integer' between 1 and 5", () => {
        expect(
          moviesValidator.validator.$jsonSchema.properties.ratings.properties
            .spectatorsRating.bsonType
        ).toBe("int");
        expect(
          moviesValidator.validator.$jsonSchema.properties.ratings.properties
            .spectatorsRating.minimum
        ).toBe(1);
        expect(
          moviesValidator.validator.$jsonSchema.properties.ratings.properties
            .spectatorsRating.maximum
        ).toBe(5);
      });
    });
  });
});
