import { Tree } from "./Tree";

class OrangeTree extends Tree {
  _age: number;
  _height: number;
  _alive: boolean;
  protected _oranges: string[] = [];

  constructor(age: number) {
    super(age);
  }

  ageOneYear(): void {
    this._age += 1,
    this.calculateHeight(this.age),
    this._isAlive(),
    this.growOranges()
  }

  get age(): number{
    return this.age
  }

  get height(): number{
    return this.height
  }

  get alive(): boolean{
    return this.alive
  }

  get oranges(): string[]{
    return this.oranges
  }

  protected _isAlive(): boolean {
    if (this.age < 50) {
      return this._alive = true
    } else {
      const randomDeath = Math.floor(Math.random() * Math.floor(100 - (this.age)))
      if (randomDeath === 0) {
        return this._alive = false;
      } else {
        return this._alive = true;
      }
    }
  }

  growOranges(): string[] {
    const oneOrange: string = "O"

    if (this.age <= 4) {
      return this._oranges
    } else if (this.age >= 5 && this.age <= 10) {
      this._oranges = []

      const myOranges: string[] = oneOrange.repeat(10).split('')

      myOranges.forEach( () => this._oranges.push("🍊"))

      return this._oranges
    } else if (this.age >= 11 && this.age <= 20) {
      this._oranges = []

      const allMyOranges: string[] = oneOrange.repeat(20).split('')

      allMyOranges.forEach( () => this._oranges.push("🍊"))

      return this._oranges
    } else if (this.age >= 21 && this.age <= 40) {
      this._oranges = []

      const allMyOranges: string[] = oneOrange.repeat(5).split('')

      allMyOranges.forEach( () => this._oranges.push("🍊"))

      return this._oranges
    } else {
      return this._oranges
    }
  }
  pickAnOrange(): void {
    if (this._oranges.length > 0) {
      this._oranges.pop()
    }
  }

}

// Leave the line below for tests to work properly.
export { OrangeTree };

