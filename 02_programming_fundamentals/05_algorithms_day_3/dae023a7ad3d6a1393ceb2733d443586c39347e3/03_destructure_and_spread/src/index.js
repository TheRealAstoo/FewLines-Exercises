const { recursiveBouncer, arrayCrusher } = require("./arraysDestructureSpread");
const { getConfig, logInfos } = require("./objectsDestructureSpread");

const userConfig = {
  user: {
    name: "John",
    password: "123123",
    admin: true,
  },
  hardware: {
    CPUThreads: 2,
  },
};
const config = getConfig(userConfig);
console.log(config);

logInfos({
  firstName: "John",
  lastName: "Rambo",
  address: {
    city: "Hope",
    country: "Canada",
  },
});

const numbers = arrayCrusher([1, 2], [3, 4]);
console.log(numbers);

recursiveBouncer([1, 2, 3]);
