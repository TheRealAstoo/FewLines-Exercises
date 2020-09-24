// Code the class here.
abstract class Tree {
  protected _age: number;
  protected _height: number;
  protected _alive: boolean = true;

  constructor(age: number) {
    this._age = age;
    this._height = this.calculateHeight(age);
  }

  calculateHeight(age: number): number {
    if (age <= 9) {
      return this._height = age * 25
    } else if (age > 9 && age <= 20) {
      return this._height = (9 * 25 + ((age - 9) * 10) )
    } else {
      return this._height = (9 * 25 + 11 * 10)
    }
  }



  abstract ageOneYear(): void;
  protected abstract _isAlive(): boolean;


  seed() :number | boolean{
    return (
    this._age = 0,
    this._height = 0,
    this._alive = true
    )
  }
}
// Leave the line below for tests to work properly.
export { Tree };


