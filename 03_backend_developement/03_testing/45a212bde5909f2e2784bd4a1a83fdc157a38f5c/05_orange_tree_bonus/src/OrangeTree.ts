import { Tree } from "./Tree";

class OrangeTree extends Tree {
  oranges: string[] = [];

  ageOneYear(): void {
    this.potentiallyDie()
    if (this.alive) {
      this.age += 1;

      if (this.age < 10) {
        this.height += 25;
      } else if (this.age >= 10 && this.age <= 20) {
        this.height += 10;
      }


      this.growOranges();
    }
  }

  private potentiallyDie(): void {
    this.alive = this.isAlive();
  }

  private handleOrangeGrowth(num: number): void {
    for (let i = 0; i < num; i++) {
      this.oranges.push("🍊");
    }
  }

  private growOranges(): void {
    this.oranges = [];

    let num = 0;

    if (this.age >= 5 && this.age <= 10) {
      num = 10;
    } else if (this.age > 10 && this.age <= 20) {
      num = 20;
    } else if (this.age > 20 && this.age <= 40) {
      num = 5;
    }

    this.handleOrangeGrowth(num);
  }

  pickAnOrange(): void {
    if (this.oranges.length > 0) {
      // Remove one orange from the tree.
      this.oranges.pop();
      console.log("You picked one 🍊.");
    } else {
      console.log("There is no 🍊.");
    }
  }

  isAlive(): boolean {  
    if (this.age < 50) { 
      return true;
    }
    const chanceToDie = (this.age - 50) / 50
    // age 50 => chanceToDie ~ 0
    // age 75 => chanceToDie = 0.5
    // age 100 => chanceToDie = 1
    return Math.random() > chanceToDie
  }

  seed(): void {
    super.seed();
    this.oranges = [];
  }
}

export { OrangeTree };
