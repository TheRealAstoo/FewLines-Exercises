import showACustomerOptions from "./showACustomerOptions.js";

const showCustomers = (customers, reader) => {
  console.log("********************************************************");
  console.log("CHOOSE A CUSTOMER");
  console.log("********************************************************");

  customers.forEach((customer, i) => {
    console.log(`${i + 1} - ${customer.fullName()}`);
  });

  const choseCustomer = () => {
    reader.question("🤖 Choose a customer \n>", (customerSelectInput) => {
      let customerSelected = customers[customerSelectInput - 1];
      if (customerSelected) {
        showACustomerOptions(customerSelected, reader, showCustomers);
      } else {
        console.log("this customer doesn't exist \n");
        choseCustomer();
      }
    });
  };
  choseCustomer();
};

export default showCustomers;