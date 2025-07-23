const fs = require('fs/promises');
const { ApiError, AipSuccess } = require('../utility/util');

const blogs = async (req, res) => {
    try {
        const blogData = await getBlogs();
        for(let blog of blogData) {
            let comms = await getCommentsByPostId(blog.postId);
            blog.comments = comms;
        }
        return res.status(200).send(new AipSuccess(200, "List of all blogs", blogData));
    } catch (error) {
        return res.status(500).send(new ApiError(500, "File does not exist", error))
    }
}

const createNewBlog = async (req, res) => {
    try {
        const { userId, title, content, tags } = req.body;
        const blogs = await getBlogs() || [];
        let postId = blogs.length + 1;
        let payload = {
            postId: postId,
            userId: userId,
            title: title,
            content: content,
            tags: tags,
            status: 'published'
        }
        blogs.push(new Blog(payload));
        await fs.writeFile('./data/blogs.json', JSON.stringify(blogs, null, 2), 'utf-8');

        return res.status(200).send(new AipSuccess(201, "Blog post saved successfully", payload));
    } catch (error) {
        return res.status(500).send(new ApiError(500, 'Server failed while creating the blog'));
    }
}

const getUserBlogs = async (req, res) => {
    try {
        const id = req.params.id;
        const blogs = await getBlogsByUserId(id);
        for(let blog of blogs) {
            let comms = await getCommentsByPostId(blog.postId);
            blog.comments = comms;
        }
        if(blogs.length>0){
            return res.status(200).send(new AipSuccess(201, 'User specific blog', blogs));
        }
        else{
            return res.status(200).send(new ApiError(404, 'No blog exist for this user'));
        }
        
    } catch (error) {
        return res.status(500).send(new ApiError(500, "Failed to fetch from server", error))
    }
}

const newComment =  async (req,res) => {
    try {
        //1. Get req body
        const {postId, userId, text} = req.body;

        //2. Get all comments
        const comments = await getComments();
        let nextCommentId = comments.length+1;
        
        let payload = {
            commentId: nextCommentId,
            postId: postId,
            userId: userId,
            text: text,
            dateCreated: new Date()
        }

        //3. Store all comments
        comments.push(payload);
        await fs.writeFile('./data/comments.json',JSON.stringify(comments,null,2),'utf-8');
        return res.status(201).send(new AipSuccess(201,"Your comment saved"));
    } catch (error) {
        return res.status(200).send(new ApiError(500, "Server Failed to response", error))
    }
}

const getBlogs = async () => {
    const data = await fs.readFile('./data/blogs.json', 'utf-8');
    let res = JSON.parse(data);
    return res;
}
const getBlogsByUserId = async (id) => {
    const data = await fs.readFile('./data/blogs.json', 'utf-8');
    let res = JSON.parse(data);
    let userblogs = res.filter(blog => blog.userId == id);
    return userblogs;
}

const getComments = async () => {
    const data = await fs.readFile('./data/comments.json', 'utf-8');
    let res = JSON.parse(data);
    return res;
}

const getCommentsByPostId = async (id) => {
    const data = await fs.readFile('./data/comments.json', 'utf-8');
    let res = JSON.parse(data);
    let postComments = res.filter(comment => comment.postId == id);
    return postComments;
}

class Blog {
    constructor(payload) {
        this.postId = payload.postId;
        this.userId = payload.userId;
        this.title = payload.title;
        this.content = payload.content;
        this.tags = payload.tags || [];
        this.status = payload.status || 'published';
        this.likes = payload.likes || 0;
        this.comments = payload.comments || [];
        this.dateCreated = new Date();
        this.lastModified = new Date();
    }
}

module.exports = { blogs, createNewBlog, getUserBlogs, newComment }