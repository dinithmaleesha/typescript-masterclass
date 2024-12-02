// extending type aliases

type Person = {
    id: string | number
    firstName: string
}

type User = Person & {
    email: string
}

const personOne = {
    id: 1,
    firstName: 'Mario'
}
const personTwo = {
    id: '2',
    firstName: 'Yoshi',
    email: 'dinith@gmail.com'
}
const personThree = {
    email: 'peach@gmail.com'
}


function printUser(user: User) {
    console.log(user.id, user.email, user.firstName)
}

// printUser(personOne)
printUser(personTwo)
// printUser(personThree)

