const car = {
  speed: 0,
  minutes: 0,
  distanceDone: 0,
  start: function () {
    this.speed = 0;
    this.minutes = 0;
    this.distanceDone = 0;
    return this;
  },
  changeSpeed: function (newSpeed) {
    this.speed = newSpeed;
    return this;
  },
  drive: function (newMins) {
    this.minutes = newMins;
    const dividedMins = this.minutes / 60;
    const distance = (dividedMins * this.speed);
    this.distanceDone += distance;

    return this;
  },
  showDistance: function () {
    console.log(`${this.distanceDone} Km`);
    return this;
  }
};

console.log(car.start().changeSpeed(130).drive(45).changeSpeed(50).drive(30).changeSpeed(90).drive(80).showDistance());
module.exports = car;
