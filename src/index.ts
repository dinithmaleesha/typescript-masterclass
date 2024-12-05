// Intersection type

interface HasID {
    id: number
}

function addIdToValue<T>(val: T): T & HasID {
    const id = Math.random()

    return { ...val, id }
}

interface Post {
    title: string,
    thumbsUp: number
}

const post = addIdToValue<Post>({ title: 'Title', thumbsUp: 34 })
console.log(post )