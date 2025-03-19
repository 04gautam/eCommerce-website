const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const userModel = require("../models/user-model")
const protect = require("../middlewares/find-user")

router.get("/", (req, res)=>{
  try {
    res.render("register.ejs")
    
  } catch (error) {
    console.log(error.message)
  }
})

router.post("/register", async (req, res)=>{
  try {
    const {username, email, password} = (req.body)

    const createUser = new userModel({
      username,
      email,
      password,
    })
    
await createUser.save()
    res.send("created")
  } catch (error) {
    res.send(error.message)
  }
})


router.post("/login", protect,(req, res)=>{
  try{

    res.cookie("token", "hello")
    console.log("Yes this is running before req.userData:")
    // console.log(req.userData)
    res.redirect("/product/shop")

  }
  catch(error){
    res.send(error.message)
  }
})

module.exports = router;