"use strict";
// extending interfaces
const user = {
    id: 1,
    format() {
        return `This user has an id of ${this.id}`;
    }
};
const bill = {
    id: 2,
    amount: 50,
    server: 'Mario',
    format() {
        return `Bill with id ${this.id} has $${this.amount}`;
    }
};
function printFormatted(val) {
    console.log(val.format());
}
function printBill(bill) {
    console.log('Server', bill.server);
    console.log(bill.format());
}
printFormatted(user);
printFormatted(bill);
// printBill(user)
printBill(bill);
