let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

// ============== option a =====================

// let total = 0;
// // console.log ("QTY  ITEM  TOTAL" )
// for (let {itemName: food, quantity: num, unitPrice: price} of order){
//   console.log (`${num}  ${food} ${price * num }`)
//   // total = price * num + total;
//  }
//  console.log(` \n Total: ${total}`)



// ===================== option b ================


const FinalBill = (orders) => {
  console.log("QTY".padEnd(10) + "Item".padEnd(20) + "Total");// we set the indentation.
  let orderCost = 0; 
  orders.forEach((order) => {
    const { itemName, quantity, unitPrice } = order;
    const total = quantity * unitPrice;
    orderCost += total;
    console.log(
      `${quantity.toString().padEnd(10)}${itemName.padEnd(20)}${total}`
    );
  });
  console.log(`\nTotal: ${orderCost}`);
};

FinalBill(order);