const express = require('express');
const cors = require('cors');

const { users } = require('./controller/userController');
const {blogs, createNewBlog, getUserBlogs, newComment} = require('./controller/blogController');
const { ApiError } = require('./utility/util');

const APP_PORT = 8000

const app = new express();

app.use(cors({
    origin: 'https://stunning-couscous-697p7v7jpg4crgq9-4200.app.github.dev'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/api/v1/users",users);
app.get("/api/v1/blogs",blogs);
app.post("/api/v1/blogs/create",createNewBlog);
app.get("/api/v1/blogs/:id", getUserBlogs);
app.post("/api/v1/comments/create",newComment);
app.get("/",(_req,res)=>{
    return res.send("Hello World");
});

app.use("",(_req,res,_next)=>{
    res.status(404).send(new ApiError(404,"Path does not exist"));
})

app.listen(APP_PORT, ()=>{
    console.log("Listening at port"+APP_PORT)
})