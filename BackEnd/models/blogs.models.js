const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    category:{
        type: String,
        enum: ["LIFE", "CODE", "OTHERS"]
    },
    description:{
        type: String
    }

},{timestamps: true})

module.exports = mongoose.model("Blog", blogSchema)