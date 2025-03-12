const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
  try {
    res.send("hello I am user router: ")
    
  } catch (error) {
    console.log(error.message)
  }
})


module.exports = router;