"use strict";
// Intersection type
function addIdToValue(val) {
    const id = Math.random();
    return Object.assign(Object.assign({}, val), { id });
}
const post = addIdToValue({ title: 'Title', thumbsUp: 34 });
console.log(post);
