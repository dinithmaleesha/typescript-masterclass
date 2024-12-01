// type aliases

// example 1 = tuple
type Rgb = [number, number, number]

function getRandomColor(): Rgb {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return [r, g, b]
}
const colorOne = getRandomColor()
console.log(colorOne);


// example 2 = object literal

type User = {
    name: string,
    score: number
}

const userOne: User = { name: 'Dinith', score: 12}


function formatUser(user: User): void {
    console.log(`${user.name} has a score of ${user.score}`);
}

formatUser(userOne)