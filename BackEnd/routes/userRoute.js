const express = require('express')
//const { getAlluser, getAllblog, getOneblog, createOneBlog, createOneUser, getOneuser } = require('../controllers/userControl')
const router = express.Router()

const { createOneUser } = require('../controllers/userControl')
const { createOneBlog } = require('../controllers/blogControl')

router.get("/", (req, res) => {
    res.send("welcome to the homepage")
})


// router.get("/allUser", getAlluser)
// router.get("/allBlogs", getAllblog)
// router.get("/oneUser", getOneuser)
// router.get("/oneBlog", getOneblog)

router.post("/create-blog", createOneBlog)
router.post("/create-user", createOneUser)







module.exports = router;