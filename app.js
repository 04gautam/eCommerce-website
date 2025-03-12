const express = require("express")
const app = express()

app.get("/", (req, res)=>{
  res.send("Yes server is running")
})

app.listen(3000, ()=>console.log("Server is connected on 3000 port"))