const Blog = require("../models/blogs.models")

module.exports.createBlog = async (data) => {
    try {
        const newBlog = await new Blog({
            title: data.title,
            category: data.category,
            description: data.description,
            createdBy: data._id

        })
        await newBlog.save();
        return newBlog;

    } catch (error) {
        console.log(error)
    }
}