// interfaces
interface Author{
    name: string,
    avatar: string
}

const authorOne: Author = {
    name: 'Maleesha',
    avatar: '/img/user.png'
}


interface Post{
    title: string,
    body: string,
    tags: string[],
    create_at: Date,
    author: Author
}

const newPost: Post = {
    title: 'First post',
    body: 'This is body',
    tags: ['gaming', 'tecg'],
    create_at: new Date(),
    author: authorOne
}


// as function argument types
function createPost(post: Post): void {
    console.log(`Created post: ${post.title} by ${post.author.name}`)
}

createPost(newPost)



// with arrays
let posts: Post[] = []

posts.push(newPost)