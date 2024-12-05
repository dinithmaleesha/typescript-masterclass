"use strict";
class DataCollection {
    constructor(data) {
        this.data = data;
    }
    loadOne() {
        const i = Math.floor(Math.random() * this.data.length);
        return this.data[i];
    }
    loadAll() {
        return this.data;
    }
    add(val) {
        this.data.push(val);
        return this.data;
    }
}
const users = new DataCollection([
    { name: 'Dinith', score: 23 },
    { name: 'Mario', score: 43 },
    { name: 'Peach', score: 64 },
    { name: 'Shaun', score: 35 },
]);
users.add({ name: 'Luigi', score: 59 });
console.log('Load One: ', users.loadOne());
console.log('Load All: ', users.loadAll());
