const { createBlog } = require("../service/blogService")


const getAllblog = async (req, res) => {
    const allBlogs = await Blog.find({})
    res.status(200).send(allBlogs)
}
const getOneblog = (req, res) => {
    res.send("This is the One Blog route")
}

const createOneBlog = async (req, res) => {
    try {
        const blog = await createBlog(req.body);
        res.send(blog);
    } catch (error) {
        res.send(error);
    }
}


module.exports = {
    createOneBlog,
    getOneblog,
    getAllblog,
}