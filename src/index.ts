// generics interface

interface Collection<T> {
    data: T[],
    name: string
}

const collectionOne: Collection<String> = {
    data: ['Mario', 'Dinith', 'Peach'],
    name: 'Mario characters'
}
const collectionTwo: Collection<number> = {
    data: [10, 39, 20, 40, 37],
    name: 'Winning lottery numbers'
}

function randomCollectionItem<T>(c: Collection<T>): T {
    const i = Math.floor(Math.random() * c.data.length)

    return c.data[i]
}

const resultOne = randomCollectionItem<string>(collectionOne)
console.log(resultOne)