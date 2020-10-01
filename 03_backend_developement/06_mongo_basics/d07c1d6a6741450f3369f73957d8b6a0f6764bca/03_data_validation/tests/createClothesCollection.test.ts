import {
  clothesValidator,
  sweaterProperties,
  shoesProperties,
  pantsProperties,
} from "../src/createClothesCollection";

describe("clothesValidator", () => {
  it("Should be an object", () => {
    expect(clothesValidator.validator.$jsonSchema.bsonType).toBe("object");
  });

  describe("sweaterProperties", () => {
    it("Should not accept additional properties", () => {
      expect(sweaterProperties.additionalProperties).toBe(false);
    });

    describe("_id", () => {
      it("Should be required", () => {
        expect(sweaterProperties.required).toContain("_id");
      });

      it("Should be only an 'objectId'", () => {
        expect(sweaterProperties.properties._id.bsonType).toBe("objectId");
      });
    });

    describe("name", () => {
      it("Should be required", () => {
        expect(sweaterProperties.required).toContain("name");
      });

      it("Should be only a 'string'", () => {
        expect(sweaterProperties.properties.name.bsonType).toBe("string");
      });

      it("Should be 30 characters max", () => {
        expect(sweaterProperties.properties.name.maxLength).toBe(30);
      });
    });

    describe("color", () => {
      it("Should be required", () => {
        expect(sweaterProperties.required).toContain("color");
      });

      it("Should be only a 'string'", () => {
        expect(sweaterProperties.properties.color.bsonType).toBe("string");
      });

      it("Should be 15 characters max", () => {
        expect(sweaterProperties.properties.color.maxLength).toBe(15);
      });
    });

    describe("category", () => {
      it("Should be required", () => {
        expect(sweaterProperties.required).toContain("category");
      });

      it(`Should be only 'sweater'`, () => {
        expect(sweaterProperties.properties.category.enum).toEqual(["sweater"]);
      });
    });

    describe("size", () => {
      it("Should be required", () => {
        expect(sweaterProperties.required).toContain("size");
      });

      it(`Should be only a string in ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"]`, () => {
        const validatorEnum = sweaterProperties.properties.size.enum;

        const acceptedValues = [
          "XXS",
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL",
          "XXXL",
        ];

        expect(validatorEnum.sort()).toEqual(acceptedValues.sort());
      });
    });
  });

  describe("shoesProperties", () => {
    it("Should not accept additional properties", () => {
      expect(shoesProperties.additionalProperties).toBe(false);
    });

    describe("_id", () => {
      it("Should be required", () => {
        expect(shoesProperties.required).toContain("_id");
      });

      it("Should be only an 'objectId'", () => {
        expect(shoesProperties.properties._id.bsonType).toBe("objectId");
      });
    });

    describe("name", () => {
      it("Should be required", () => {
        expect(shoesProperties.required).toContain("name");
      });

      it("Should be only a 'string'", () => {
        expect(shoesProperties.properties.name.bsonType).toBe("string");
      });

      it("Should be 30 characters max", () => {
        expect(shoesProperties.properties.name.maxLength).toBe(30);
      });
    });

    describe("color", () => {
      it("Should be required", () => {
        expect(shoesProperties.required).toContain("color");
      });

      it("Should be only a 'string'", () => {
        expect(shoesProperties.properties.color.bsonType).toBe("string");
      });

      it("Should be 15 characters max", () => {
        expect(shoesProperties.properties.color.maxLength).toBe(15);
      });
    });

    describe("category", () => {
      it("Should be required", () => {
        expect(shoesProperties.required).toContain("category");
      });

      it(`Should be only 'shoes'`, () => {
        expect(shoesProperties.properties.category.enum).toEqual(["shoes"]);
      });
    });

    describe("size", () => {
      it("Should be required", () => {
        expect(shoesProperties.required).toContain("size");
      });

      it("Should be only an 'integer' between 30 and 50", () => {
        expect(shoesProperties.properties.size.bsonType).toBe("int");
        expect(shoesProperties.properties.size.minimum).toBe(30);
        expect(shoesProperties.properties.size.maximum).toBe(50);
      });
    });

    describe("material", () => {
      it("Should be optional", () => {
        expect(shoesProperties.required).not.toContain("material");
      });

      it(`Should be only a 'string' in ["leather", "textile", "synthetic"]`, () => {
        const validatorEnum = shoesProperties.properties.material.enum;

        const acceptedValues = ["leather", "textile", "synthetic"];

        expect(validatorEnum.sort()).toEqual(acceptedValues.sort());
      });
    });
  });

  describe("pantsProperties", () => {
    it("Should not accept additional properties", () => {
      expect(pantsProperties.additionalProperties).toBe(false);
    });

    describe("_id", () => {
      it("Should be required", () => {
        expect(pantsProperties.required).toContain("_id");
      });

      it("Should be only an 'objectId'", () => {
        expect(pantsProperties.properties._id.bsonType).toBe("objectId");
      });
    });

    describe("name", () => {
      it("Should be required", () => {
        expect(pantsProperties.required).toContain("name");
      });

      it("Should be only a 'string'", () => {
        expect(pantsProperties.properties.name.bsonType).toBe("string");
      });

      it("Should be 30 characters max", () => {
        expect(pantsProperties.properties.name.maxLength).toBe(30);
      });
    });

    describe("color", () => {
      it("Should be required", () => {
        expect(pantsProperties.required).toContain("color");
      });

      it("Should be only a 'string'", () => {
        expect(pantsProperties.properties.color.bsonType).toBe("string");
      });

      it("Should be 15 characters max", () => {
        expect(pantsProperties.properties.color.maxLength).toBe(15);
      });
    });

    describe("category", () => {
      it("Should be required", () => {
        expect(pantsProperties.required).toContain("category");
      });

      it(`Should be only 'pants'`, () => {
        expect(pantsProperties.properties.category.enum).toEqual(["pants"]);
      });
    });

    describe("size", () => {
      it("Should be required", () => {
        expect(pantsProperties.required).toContain("size");
      });

      it("Should be only an 'object'", () => {
        expect(pantsProperties.properties.size.bsonType).toBe("object");
      });

      it("Should not accept additional properties", () => {
        expect(pantsProperties.properties.size.additionalProperties).toBe(
          false
        );
      });

      describe("width", () => {
        it("Should be required", () => {
          expect(pantsProperties.properties.size.required).toContain("width");
        });

        it("Should be only an 'integer' between 32 and 46", () => {
          expect(
            pantsProperties.properties.size.properties.width.bsonType
          ).toBe("int");
          expect(pantsProperties.properties.size.properties.width.minimum).toBe(
            32
          );
          expect(pantsProperties.properties.size.properties.width.maximum).toBe(
            46
          );
        });
      });

      describe("cut", () => {
        it("Should be optional", () => {
          expect(pantsProperties.properties.size.required).not.toContain("cut");
        });

        it(`Should be only a 'string' in ["slim", "skinny", "regular", "straight"]`, () => {
          const validatorEnum =
            pantsProperties.properties.size.properties.cut.enum;

          const acceptedValues = ["slim", "skinny", "regular", "straight"];

          validatorEnum.forEach((value) => {
            expect(acceptedValues).toContain(value);
          });
        });
      });
    });
  });
});
