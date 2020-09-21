
const customerPurchaseHistory = (customerSelected, showACustomerOptions, reader) => {
  console.log("********************************************************\n");
  console.log(`${customerSelected.fullName()} PURCHASE HISTORY`);
  console.log("********************************************************\n");

  customerSelected.purchaseHistory.forEach(purchase => {
    console.log(`${purchase.date} - ${purchase.amount}`);
  });
};

export default customerPurchaseHistory;