"use strict";
// reusable interfaces
const something = { quantity: 10 };
function printQuantity(item) {
    console.log(`The quantity of the item is ${item.quantity}`);
}
const fruit = {
    name: 'Mango',
    quantity: 50
};
const vehical = {
    type: 'car',
    quantity: 3,
};
const person = {
    name: 'mario',
    age: 30,
};
printQuantity(fruit);
printQuantity(vehical);
printQuantity({ quantity: 50 });
