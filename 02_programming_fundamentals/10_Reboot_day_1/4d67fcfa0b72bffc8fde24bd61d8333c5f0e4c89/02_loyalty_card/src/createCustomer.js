import * as uuid from "uuid";
import showCustomers from "./showCustomers.js";

const createCustomer = (customers, reader) => {
  console.log("********************************************************");
  console.log("CREATE NEW CUSTOMER");
  console.log("********************************************************");

  let customer = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    city: "",
    country: "",
    fidelityPoints: 0,
    purchaseHistory: [],
    purchaseAmount: 0,
    fullName: () => `${customer.firstName} ${customer.lastName}`
  };

  customer.id = uuid.v4();
  reader.question("🤖 - first name:> \n>", (firstNameInput) => {
    customer.firstName = firstNameInput;
    reader.question("🤖 - last name:> \n>", (lastNameInput) => {
      customer.lastName = lastNameInput;
      reader.question("🤖 - email:> \n>", (emailInput) => {
        customer.email = emailInput;
        reader.question("🤖 - birthDate:> \n>", (birthDateInput) => {
          customer.birthDate = birthDateInput;
          reader.question("🤖 - city:> \n>", (cityInput) => {
            customer.city = cityInput;
            reader.question("🤖 - country:> \n>", (countryInput) => {
              customer.country = countryInput;
              customers.push(customer);
              showCustomers(customers, reader);
            });
          });
        });
      });
    });
  });
};

export default createCustomer;