class Bird {
  age: number;
  constructor(age: number) {
    this.age = age;
  }

  sing(): void {
    console.log("Cui cui");
  }

  fly(seconds: number): void {
    if (this.age <= 1) {
      console.log("The bird is too young to fly") 
    } else if (this.age > 1 && this.age <= 3) {
      console.log(`The bird flew ${seconds} meters in ${seconds} seconds`)
    } else {
      console.log(`The bird flew ${seconds * 2} meters in ${seconds} seconds`)
    }
  }
}

// Leave the line below for tests to work properly.
export { Bird };
