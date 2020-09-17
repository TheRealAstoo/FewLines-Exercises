function humanFactory(genderFlag) {
  const basic = {
    genre: genderFlag ? "male" : "female",
    firstName: genderFlag ? "John" : "Jane",
    lastName: "Doe",
    job: "unemployed",
    fullname: function () {
      return `${this.firstName} ${this.lastName}`;
    },
    introduction: function () {
      return `Hello! My name is ${this.fullname()}.`;
    },
  };

  return basic;
};

function createHumans(humanAttributs) {
  let genderFlag = true;

  humanAttributs.forEach(attribut => {
    if (attribut.genre === "female") {
      genderFlag = false;
    }
  });
  humanAttributs.forEach(attribut => {
    return attribut;
  });

  const protoHuman = humanFactory(genderFlag);
  
  let human = {
    ...protoHuman,
  };
  return human;
};

const humans = createHumans([]);

console.log(humans);
console.log(humans.firstName);
console.log(humans.fullname());
console.log(humans.introduction());

module.exports = {
  humanFactory,
  createHumans,
};

//humans.firstName; // "John"
//humans.lastName; // "Doe"
//humans.genre; // "male"
//humans.job; // "unemployed"
//humans.fullname(); // "John Doe"
//humans.introduction; // "Hello! My name is John Doe."
