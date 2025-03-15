const express = require("express")
const router = express.Router()

const ownerModel = require("../models/owners-model")
const productModel = require("../models/product-model")


router.post("/proinfo", async (req, res)=>{
  try {
   const {name, price, discount, bgcolor ,panelcolor,textcolor} = (req.body)

   const makeProduct = new productModel({
      name,
      price, 
      discount,
      bgcolor,
      panelcolor,
      textcolor
   })
   await makeProduct.save()

   res.redirect("/product/shop")
    
  } catch (error) {
    console.log(error.message)
  }
})



module.exports = router;