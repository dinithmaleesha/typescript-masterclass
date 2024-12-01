"use strict";
const authorOne = {
    name: 'Maleesha',
    avatar: '/img/user.png'
};
const newPost = {
    title: 'First post',
    body: 'This is body',
    tags: ['gaming', 'tecg'],
    create_at: new Date(),
    author: authorOne
};
// as function argument types
function createPost(post) {
    console.log(`Created post: ${post.title} by ${post.author.name}`);
}
createPost(newPost);
// with arrays
let posts = [];
posts.push(newPost);
