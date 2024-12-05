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
    deleteOne(id) {
        this.data = this.data.filter((item) => item.id !== id);
    }
}
const users = new DataCollection([
    { id: 1, name: 'Dinith', score: 23 },
    { id: 2, name: 'Mario', score: 43 },
    { id: 3, name: 'Peach', score: 64 },
    { id: 4, name: 'Shaun', score: 35 },
]);
users.add({ id: 5, name: 'Luigi', score: 59 });
console.log('Load One: ', users.loadOne());
console.log('Load All: ', users.loadAll());
users.deleteOne(2);
