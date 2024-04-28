const dev = require("./config");
const mongoose = require("mongoose")

// const url = dev.db_url 

const url = "mongodb://localhost:27017";

mongoose.connect(url)
.then(()=>{
    console.log("DB is connected")
})
.catch((error)=>{
    console.log(error.message)
})
