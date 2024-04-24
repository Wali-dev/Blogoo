const dev = require("./config");
const mongoose = require("mongoose")

const url = dev.db_url;


mongoose.connect(url)
.then(()=>{
    console.log("DB is connected")
})
.catch((error)=>{
    console.log(error.message)
})
