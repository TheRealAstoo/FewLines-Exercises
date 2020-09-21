
const showCustomerAccount = (customerSelected, showACustomer, reader) => {
  console.log("********************************************************\n");
  console.log(`${customerSelected.fullName()}'S INFORMATION`);
  console.log("********************************************************\n");

  console.log("Customer information:");
  console.log(`Name:             ${customerSelected.fullName()}`);
  console.log(`Email:            ${customerSelected.email}`);
  console.log("Address:");
  console.log(` - City:          ${customerSelected.city}`);
  console.log(` - Country:       ${customerSelected.country}`);
  console.log(`Total purchase:   ${customerSelected.purchaseAmount}`);
  console.log(`Fidelity points:  ${customerSelected.fidelityPoints}`);

  showACustomer(customerSelected, reader);
};

export default showCustomerAccount;