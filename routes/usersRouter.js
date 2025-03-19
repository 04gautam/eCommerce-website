const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const userModel = require("../models/user-model")
const protect = require("../middlewares/find-user")
const jwt = require("jsonwebtoken")

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

    // console.log(req.userData.email)

    // res.cookie("token", "hello")
    let token = jwt.sign({secret:"hello"}, process.env.JWT_KEY);
    // console.log(token)

    res.cookie("token", token)
    
  

    res.redirect("/shop")

  }
  catch(error){
    res.send(error.message)
  }
})

module.exports = router;