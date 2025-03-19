const express = require("express")
const router = express.Router()
const productModel = require("../models/product-model")
const cookieProtect = require("../middlewares/cookie-protect")
const upload = require("../config/multer-config")

router.get("/ecom", cookieProtect,(req, res)=>{
  try {
    res.render("admin-panel.ejs")
    
  } catch (error) {
    console.log(error.message)
  }
})



module.exports = router;