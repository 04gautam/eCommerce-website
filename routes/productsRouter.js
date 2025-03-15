const express = require("express")
const router = express.Router()
const productModel = require("../models/product-model")
const cookieProtect = require("../middlewares/cookie-protect")

router.get("/ecom", cookieProtect,(req, res)=>{
  try {
    res.render("admin-panel.ejs")
    
  } catch (error) {
    console.log(error.message)
  }
})

router.get("/shop", cookieProtect, async (req, res)=>{
  try {

    const allProduct = await productModel.find()
    

    res.render("shop.ejs", {allProduct: allProduct})
    
  } catch (error) {
    console.log(error.message)
  }
})


module.exports = router;