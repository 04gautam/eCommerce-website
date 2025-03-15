const mongoose = require("mongoose")
// const config = require("config")

// const dbgr = require("debug")("app");

// ${config.get("MONGODB_URI")}/ecom
// console.log(config.get("MONGODB_URI"))

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
  console.log("Database connected to the server")
 
})
.catch((err)=>console.log(err.message))

module.exports = mongoose.connection;