class Tree {
  age: number;
  height: number;
  alive: boolean = true;

  constructor(age: number) {
    this.age = age;

    let height: number = 0;

    for (let index = 1; index <= age; index++) {
      if (this.age > 0 && index < 10) {
        height += 25;
        
      } else if (index >= 10 && index <= 20) {
        height += 10;
      }      
    }

    this.height = height;
  }

  seed(): void {
    this.age = 0;
    this.height = 0;
    this.alive = true;
  }
}

export { Tree };
