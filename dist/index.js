"use strict";
// any type
let age;
let title;
age = 12;
age = false;
age = 'Hello';
title = 12;
title = 'Hello';
title = false;
// any type in arrays
let things = [true, 'Hello', 1, null];
things.push({ id: 123 });
// functions and any
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether('Hello');
const resultTwo = addTogether(5);
console.log(resultTwo);
// usefull when migrating from js to ts because using any won't cause errors initially
