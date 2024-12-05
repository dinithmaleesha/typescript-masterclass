class DataCollection<T> {
    constructor(private data: T[]) {}

    loadOne(): T {
        const i = Math.floor(Math.random() * this.data.length)
        return this.data[i]
    }
    loadAll(): T[] {
        return this.data
    }
    add(val: T): T[] {
        this.data.push(val)
        return this.data
    }
}

interface User {
    name: string,
    score: number
}

const users = new DataCollection<User>([
    { name: 'Dinith', score: 23 },
    { name: 'Mario', score: 43 },
    { name: 'Peach', score: 64 },
    { name: 'Shaun', score: 35 },
])

users.add({ name: 'Luigi', score: 59 })

console.log('Load One: ', users.loadOne())
console.log('Load All: ', users.loadAll())