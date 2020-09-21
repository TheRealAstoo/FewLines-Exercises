
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

  reader.question("🤖 Purchase amount", (amountInput) => {
    purchase.amount = amountInput;
    purchase.date = today;

    customerSelected.purchaseHistory.push(purchase);
    customerSelected.fidelityPoints += (purchase.amount / 10);
    showACustomerOptions();
  });
};

export default addPurchase;