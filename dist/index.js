"use strict";
// generics interface
const collectionOne = {
    data: ['Mario', 'Dinith', 'Peach'],
    name: 'Mario characters'
};
const collectionTwo = {
    data: [10, 39, 20, 40, 37],
    name: 'Winning lottery numbers'
};
function randomCollectionItem(c) {
    const i = Math.floor(Math.random() * c.data.length);
    return c.data[i];
}
const resultOne = randomCollectionItem(collectionOne);
console.log(resultOne);
