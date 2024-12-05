// generics

function logAndReturnString(val: string): string {
    console.log(val)
    return val
}
function logAndReturnNumber(val: number): number {
    console.log(val)
    return val
}
function logAndReturnBoolean(val: boolean): boolean {
    console.log(val)
    return val
}

function logAndReturnValue<T>(val: T): T {
    console.log(val)
    return val
}

// const result = logAndReturnValue<string>('1')
// const resultTwo = logAndReturnValue<number>(2)



function getRandomArrayValue<T>(values: T[]): T {
    const i = Math.floor(Math.random() * values.length)

    return values[i]
}

interface User {
    name: string,
    score: number
}

const users: User[] = [
    { name: 'Mario', score: 20 },
    { name: 'Peach', score: 60 },
    { name: 'Watio', score: 30 },
    { name: 'Yoshi', score: 58 },
]

const randomUser = getRandomArrayValue<User>(users)
console.log(randomUser) 
