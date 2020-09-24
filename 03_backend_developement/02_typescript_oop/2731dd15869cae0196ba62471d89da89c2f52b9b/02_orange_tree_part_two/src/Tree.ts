// Code the class here.
abstract class Tree {
  age: number;
  height: number;
  alive: boolean = true;

  constructor(age: number) {
    this.age = age;
    this.height = this.calculateHeight(age);
  }

  calculateHeight(age: number): number {
    if (age <= 9) {
      return this.height = age * 25
    } else if (age > 9 && age <= 20) {
      return this.height = (9 * 25 + ((age - 9) * 10) )
    } else {
      return this.height = (9 * 25 + 11 * 10)
    }
  }



  abstract ageOneYear(): void;
  abstract isAlive(): boolean;


  seed() :number | boolean{
    return (
    this.age = 0,
    this.height = 0,
    this.alive = true
    )
  }
}
// Leave the line below for tests to work properly.
export { Tree };

