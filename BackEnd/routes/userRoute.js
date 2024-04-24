const express = require('express')
const { getAlluser, getAllblog, getOneblog, createOneBlog, createOneUser, getOneuser } = require('../controllers/userControl')
const router = express.Router()



router.get("/", (req, res)=>{
    res.send("welcome to the homepage")
})


router.get("/allUser",getAlluser)
router.get("/allBlogs",getAllblog)
router.get("/oneUser", getOneuser)
router.get("/oneBlog",getOneblog)

router.post("/createBlog",createOneBlog)
router.post("/createUser",createOneUser)







module.exports = router;