import { Tree } from "./Tree";

class OrangeTree extends Tree {
  age: number;
  height: number;
  alive: boolean;
  oranges: string[] = [];

  constructor(age: number) {
    super(age);
  }

  ageOneYear(): void {
    this.age += 1,
    this.calculateHeight(this.age),
    this.isAlive(),
    this.growOranges(this.age)
  }

  isAlive(): boolean {
    if (this.age < 50) {
      return this.alive = true
    } else {
      const randomDeath = Math.floor(Math.random() * Math.floor(100 - (this.age)))
      if (randomDeath === 0) {
        return this.alive = false;
      } else {
        return this.alive = true;
      }
    }
  }

  growOranges(): string[] {
    const oneOrange: string = "O"

    if (this.age <= 4) {
      return this.oranges
    } else if (this.age >= 5 && this.age <= 10) {
      this.oranges = []

      const myOranges: string[] = oneOrange.repeat(10).split('')

      myOranges.forEach( () => this.oranges.push("🍊"))

      return this.oranges
    } else if (this.age >= 11 && this.age <= 20) {
      this.oranges = []

      const allMyOranges: string[] = oneOrange.repeat(20).split('')

      allMyOranges.forEach( () => this.oranges.push("🍊"))

      return this.oranges
    } else if (this.age >= 21 && this.age <= 40) {
      this.oranges = []

      const allMyOranges: string[] = oneOrange.repeat(5).split('')

      allMyOranges.forEach( () => this.oranges.push("🍊"))

      return this.oranges
    } else {
      return this.oranges
    }
  }
  pickAnOrange(): void {
    if (this.oranges.length > 0) {
      this.oranges.pop()
    }
  }

}

// Leave the line below for tests to work properly.
export { OrangeTree };
