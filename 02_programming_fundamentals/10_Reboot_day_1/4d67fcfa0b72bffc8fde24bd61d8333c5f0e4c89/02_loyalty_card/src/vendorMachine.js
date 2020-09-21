import createCustomer from "./createCustomer.js";
import showCustomers from "./showCustomers.js";


const vendorMachine = (reader) => {
  console.log("Welcome \n");
  console.log("******************************************************** \n");
  console.log("1 - Add new customer \n");
  console.log("2 - Access customer data \n");
  console.log("3 - Quit \n");
  let customers = [];
  

  const choiceSelection = () => {
    reader.question("🤖 Choose an action \n >", (selectedChoice) => {
      if (selectedChoice === "1") {
        createCustomer(customers, reader);
      } else if (selectedChoice === "2") {
        showCustomers(customers, reader);
      } else if (selectedChoice === "3") {
        console.log("Merci et à bientôt !");
        reader.close();
      } else {
        console.log("Je n'ai pas compris votre requête, veuillez écrire 1, 2 ou 3 pour votre choix.");
        choiceSelection(customers);
      }
    });
  };
  choiceSelection();
};

export default vendorMachine;