const express = require('express')
const app = express()
const userRouter = require('./routes/userRoute')
const cors = require('cors');

app.use(express.json()); //this middleware has to be to the top inorder to read data from the body


app.use("/api", userRouter)

app.use(cors())



app.use((req, res)=>{
    res.send("There is no such route")
})

module.exports = app;

