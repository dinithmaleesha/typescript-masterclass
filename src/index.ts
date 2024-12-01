// tuples
let person: [string, number, boolean] = ['Mario', 2, true]


// tuples examples

let hsla: [number, string, string, number]
hsla = [200, '100%', '50%', 1]

let xy: [number, number]
xy = [23, 56]

function useCoors(): [number, number] {
    const lat = 100
    const long = 50

    return [lat, long]
}

const [lat, long] = useCoors()


// named tuples

let user: [name: string, age: number]

user = ['Mario', 22]