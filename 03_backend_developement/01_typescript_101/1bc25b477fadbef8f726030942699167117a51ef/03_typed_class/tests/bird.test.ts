// @ts-nocheck
import { Bird } from "../src/index";

describe("Bird class", () => {
  it("should only take a number as constructor argument", () => {
    const bird = new Bird(1);
    expect(bird.age).toBe(1);
    expect(typeof bird.age === "number");
  });

  describe("should output", () => {
    test("Cui cui", () => {
      console.log = jest.fn();
      const babyBird = new Bird(1);

      babyBird.sing();
      expect(console.log.mock.calls[0][0]).toEqual("Cui cui");
    });

    test(`"The bird is too young to fly" if is the bird is <= 1 month old `, () => {
      console.log = jest.fn();
      const babyBird = new Bird(1);

      babyBird.fly(1);
      expect(console.log.mock.calls[0][0]).toEqual(
        "The bird is too young to fly"
      );
    });

    describe("the distance and the time flied", () => {
      test("1m/s if the bird age is > 1 && <= 3", () => {
        console.log = jest.fn();
        const youngBird = new Bird(3);

        youngBird.fly(5);
        expect(console.log.mock.calls[0][0]).toEqual(
          expect.stringMatching(/(.*?)5(.*?)5(.*)/)
        );
      });

      test("2m/s if the bird age is < 3", () => {
        console.log = jest.fn();
        const matureBird = new Bird(4);

        matureBird.fly(10);
        expect(console.log.mock.calls[0][0]).toEqual(
          expect.stringMatching(/(.*?)20(.*?)10(.*)/)
        );
      });
    });
  });
});
