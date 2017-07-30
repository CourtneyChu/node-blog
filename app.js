/* app.js */

// this was so you could require and instantiate express
const app = require('express')();

// this represents the fake posts to simulate a database
const posts = [
  {
    id: 1,
    author: 'Courtney',
    title: 'Templating with EJS',
    body: 'Blog post number 1'
  },
  {
    id: 2,
    author: 'Andrew',
    title: 'Express: Starting from the Bottom',
    body: 'Blog post number 2'
  },
  {
    id: 3,
    author: 'Emma',
    title: 'Streams',
    body: 'Blog post number 3'
  },
  {
    id: 4,
    author: 'Cody',
    title: 'Events',
    body: 'Blog post number 4'
  }
]

// this step was to set the view engine to ejs
app.set('view engine', 'ejs')

// this is for the blog home page
app.get('/', (req, res) => {
  // this renders `home.ejs` with the list of posts
  res.render('home', { posts: posts })
})

app.get('/post/:id', (req, res) => {
  // this finds the post in the posts array - this queries our posts array for a post with that ID
  const post = posts.filter((post) => {
    return post.id == req.params.id
  })[0]

  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body
})
})

app.listen(8080)

console.log('listening on port 8080')