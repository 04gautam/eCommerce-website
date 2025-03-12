const mongoose = require("mongoose")

module.exports =  mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("Database connected to the server")})
.catch((err)=>console.log(err.message))