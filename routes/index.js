const express = require("express")
const { route } = require("./ownersRouter")
const cookieProtect = require("../middlewares/cookie-protect")
const findUser = require("../middlewares/find-user")
const userModel = require("../models/user-model")
const router = express.Router()

router.get("/cart/:productId",cookieProtect, async (req, res)=>{
  try{
   
  let cartUser = await userModel.findOne({email:"gautamhitlar2@gmail.com"})
    cartUser.cart.push(req.params.productId)
    console.log(req.params.productId)
   await cartUser.save()
  //  req.flash("success", "Added to cart")
    res.redirect("/product/shop")

  }catch(error){
    res.send(error.message)
  }
})

router.get('/cart', async (req, res)=>{
  let cartUser = await userModel.findOne({email:"gautamhitlar2@gmail.com"})
  .populate("cart")
// console.log(cartUser)
  res.render("cart.ejs", {cartUser: cartUser})
}) 

module.exports = router;