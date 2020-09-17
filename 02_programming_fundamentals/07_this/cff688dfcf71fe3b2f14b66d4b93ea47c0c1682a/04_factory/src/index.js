const { createHumans } = require("./humanFactory");

const humans = createHumans([{ lastName: "Toto" }, { genre: "female" }]);

console.log(humans);
