"use strict";
// union types
let someId;
someId = 1;
someId = '2';
let email = null;
let anotherId;
// union type pitfall
function swapIdType(id) {
    if (typeof id === 'string')
        return parseInt(id);
    else
        return id.toString();
}
const idOne = swapIdType(5);
const idTwo = swapIdType('2');
console.log(idOne, idTwo);
function logDetails(value) {
    if (value.type === 'user') {
        console.log(value.email, value.userName);
    }
    else {
        console.log(value.firstName, value.age);
    }
}
