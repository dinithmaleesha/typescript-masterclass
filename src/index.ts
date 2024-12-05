interface HasId {
    id: number
}

class DataCollection<T extends HasId> {
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
    deleteOne(id: number): void {
        this.data = this.data.filter((item) => item.id !== id)
    }
}

interface User {
    id: number,
    name: string,
    score: number
}

const users = new DataCollection<User>([
    { id: 1, name: 'Dinith', score: 23 },
    { id: 2, name: 'Mario', score: 43 },
    { id: 3, name: 'Peach', score: 64 },
    { id: 4, name: 'Shaun', score: 35 },
])

users.add({ id: 5, name: 'Luigi', score: 59 })

console.log('Load One: ', users.loadOne())
console.log('Load All: ', users.loadAll())

users.deleteOne(2)