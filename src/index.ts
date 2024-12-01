// function

function addTwoNumber(a: number, b: number): number {
    return a + b
}

const subsractTwoNumber = (a: number, b: number): number => {
    return a - b
}

addTwoNumber(10, 1)
subsractTwoNumber(10, 5)

function addAllNumber(item: number[]) {
    const total = item.reduce((a, c) => a + c, 0)
    console.log(total)
}

addAllNumber([5, 7, 11, 3])


// return type inference

function formatGreeting(name: string, greeting: string) {
    return `${greeting}, ${name}`
}

const result = formatGreeting('Mario', 'Hello')
console.log(result)
