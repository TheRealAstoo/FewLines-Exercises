import showCustomerAccount from "./showCustomerAccount.js";
import addPurchase from "./addPurchase.js";
import customerPurchaseHistory from "./customerPurchaseHistory.js";

const showACustomerOptions = (customerSelected, reader, showCustomers, vendorMachine) => {
  console.log("********************************************************\n");
  console.log(customerSelected.fullName());
  console.log("\n******************************************************** \n");
  console.log("1 - Show account");
  console.log("2 - Add purchase");
  console.log("3 - Use fidelity points");
  console.log("4 - Show purchase history");
  console.log("5 - Choose another customer");
  console.log("6 - Back to menu");
  console.log("7 - Quit");

  reader.question(`🤖 Choose an action for ${customerSelected.fullName()}\n`, (actionInput) => {
    switch (actionInput) {
      case "1": 
        showCustomerAccount(customerSelected, showACustomerOptions, reader);
        break;
      case "2": 
        addPurchase(customerSelected, showACustomerOptions, reader);
        break;
      case "3": 
        console.log("3 - Use fidelity points");
        break;
      case "4": 
        customerPurchaseHistory(customerSelected, showACustomerOptions, reader);
        break;
      case "5": 
        showCustomers();
        break;
      case "6": 
        vendorMachine();
        break;
      case "7": 
        console.log("Merci d'avoir utilisé notre programme !");
        reader.close();
        break;
    };
  });
};

export default showACustomerOptions;