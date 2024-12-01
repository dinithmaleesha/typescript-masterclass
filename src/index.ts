// union types

let someId: number | string

someId = 1
someId = '2'


let email: string | null = null


type Id = number | string
let anotherId: Id



// union type pitfall

function swapIdType(id: Id): Id {
    if(typeof id === 'string')
        return parseInt(id)
    else
        return id.toString()
}

const idOne = swapIdType(5)
const idTwo = swapIdType('2')

console.log(idOne, idTwo);


// tagged interfaces
interface User {
    type: 'user'
    userName: string,
    email: string,
    id: Id
}
interface Person {
    type: 'person'
    firstName: string,
    age: number,
    id: Id
}

function logDetails(value: User | Person): void {
    if (value.type === 'user') {
        console.log(value.email, value.userName);
    } else {
        console.log(value.firstName, value.age)
    }
}
