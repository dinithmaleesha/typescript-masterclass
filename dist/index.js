"use strict";
// generics
function logAndReturnString(val) {
    console.log(val);
    return val;
}
function logAndReturnNumber(val) {
    console.log(val);
    return val;
}
function logAndReturnBoolean(val) {
    console.log(val);
    return val;
}
function logAndReturnValue(val) {
    console.log(val);
    return val;
}
// const result = logAndReturnValue<string>('1')
// const resultTwo = logAndReturnValue<number>(2)
function getRandomArrayValue(values) {
    const i = Math.floor(Math.random() * values.length);
    return values[i];
}
const users = [
    { name: 'Mario', score: 20 },
    { name: 'Peach', score: 60 },
    { name: 'Watio', score: 30 },
    { name: 'Yoshi', score: 58 },
];
const randomUser = getRandomArrayValue(users);
console.log(randomUser);
