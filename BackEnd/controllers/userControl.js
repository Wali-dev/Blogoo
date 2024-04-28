const { v4: uuidv4 } = require("uuid")
const User = require("../models/users.models")
const Blog = require("../models/blogs.models")


const getAlluser = (req, res) => {
    res.send("This is the all user route")
}


const getAllblog = async(req, res) => {
    const allBlogs = await Blog.find({})
    res.send(allBlogs)
}


const getOneuser = (req, res) => {
    res.send("This is the One user route")
}
const getOneblog = (req, res) => {
    res.send("This is the One Blog route")
}


const createOneBlog = async(req, res) => {

    try {
        const newBlog = await new Blog({
            title: req.body.title,
            category: req.body.category,
            description: req.body.description,
            createdBy: req.user._id
            
        })
        await newBlog.save();
        res.status(200).json(newBlog);

    } catch (error) {
        res.send(error.message)
    }
}


const createOneUser = async (req, res) => {
    try {
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            personal_description: req.body.personal_description,
            userID: uuidv4(),
        })

        await newUser.save();
        res.status(200).json(newUser);

    } catch (error) {
        res.send(error.message)
    }
}


module.exports = {
    createOneUser,
    createOneBlog,
    getOneblog,
    getOneuser,
    getAllblog,
    getAlluser
}