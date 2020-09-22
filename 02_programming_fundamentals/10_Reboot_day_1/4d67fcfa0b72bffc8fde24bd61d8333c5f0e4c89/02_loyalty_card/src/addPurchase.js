
const addPurchase = (customerSelected, showACustomerOptions, reader) => {
  let purchase = {
    amount: 0,
    date: "",
  };

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;

  reader.question("🤖 Purchase amount \n", (amountInput) => {
    purchase.amount = customerSelected.fidelityPoints ? amountInput - customerSelected.fidelityPoints : amountInput;
    purchase.date = today;

    customerSelected.purchaseHistory.push(purchase);
    customerSelected.fidelityPoints += (purchase.amount / 10);
    showACustomerOptions(customerSelected, reader);
  });
};

export default addPurchase;