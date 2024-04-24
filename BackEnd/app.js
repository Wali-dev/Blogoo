const express = require('express')
const app = express()
const userRouter = require('./routes/userRoute')
const cors = require('cors');




app.use("/api", userRouter)

app.use(cors())

app.use(express.json())

app.use((req, res)=>{
    res.send("There is no such route")
})

module.exports = app;
