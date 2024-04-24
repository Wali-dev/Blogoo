const getAlluser = (req, res)=>{
    res.send("This is the all user route")
}
const getAllblog = (req, res)=>{
    res.send("This is the all Blog route")
}
const getOneuser = (req, res)=>{
    res.send("This is the One user route")
}
const getOneblog = (req, res)=>{
    res.send("This is the One Blog route")
}
const createOneBlog = (req, res)=>{
    res.send("This is the Create blog route")
}
const createOneUser = (req, res)=>{
    res.send("This is the Create User route")
}


module.exports = {createOneUser,
createOneBlog,
getOneblog,
getOneuser,
getAllblog,
getAlluser}