const cowsay = require("moosay");

const sayGoodBye = (reader) => {
  console.clear();
  console.log("Nous vous remercions d'avoir utilisé un des produits de la Fanien Corporation");
  console.log(
    cowsay.say({
      text: "Gooooooood byyyyyyyyyye",
      e: "oO",
      T: "U ",
    }),
  );
  reader.close();
};

module.exports = sayGoodBye;
