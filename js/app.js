let itemNames = [`journal`, `candle`, `markers`];
let itemPrices = [`$22.50`, `$39.99`, `$16`];
let inStock = [true, true, false];

let firstItemName = itemNames[0];
console.log(firstItemName);

let firstItemPrice = itemPrices[0];
console.log(firstItemPrice);

itemNames.push(`mug`);
itemPrices.push(`$18.99`);
inStock.push(true);

// I was just checking to make sure my PUSH worked (then commented out (obviously))
// let lastItemPrice = itemPrices[3];
// console.log(lastItemPrice);

let lastItemName=itemNames.pop();
let lastItemPrice=itemPrices.pop();
let lastItemStock=inStock.pop();

// testing to make sure my POP functions worked - they did!!
console.log(lastItemName);
console.log(lastItemPrice);
console.log(lastItemStock);