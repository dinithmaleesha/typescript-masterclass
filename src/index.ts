// reusable interfaces

interface hasQuantity {
    quantity: number
}

const something: hasQuantity = { quantity: 10 }

function printQuantity(item: hasQuantity): void {
    console.log(`The quantity of the item is ${item.quantity}`)
}
const fruit = {
    name: 'Mango',
    quantity: 50
}
const vehical = {
    type: 'car',
    quantity: 3,
}
const person = {
    name: 'mario',
    age: 30,
}

printQuantity(fruit)
printQuantity(vehical)
printQuantity({quantity: 50})