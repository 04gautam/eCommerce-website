const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
  try {
    res.send("hello I am product router: ")
    
  } catch (error) {
    console.log(error.message)
  }
})


module.exports = router;