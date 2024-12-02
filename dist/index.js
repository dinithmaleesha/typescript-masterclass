"use strict";
// extending type aliases
const personOne = {
    id: 1,
    firstName: 'Mario'
};
const personTwo = {
    id: '2',
    firstName: 'Yoshi',
    email: 'dinith@gmail.com'
};
const personThree = {
    email: 'peach@gmail.com'
};
function printUser(user) {
    console.log(user.id, user.email, user.firstName);
}
// printUser(personOne)
printUser(personTwo);
// printUser(personThree)
