const express = require("express")
const { route } = require("./ownersRouter")
const cookieProtect = require("../middlewares/cookie-protect")
const findUser = require("../middlewares/find-user")
const userModel = require("../models/user-model")
const router = express.Router()
const productModel = require("../models/product-model")



router.get("/cart/:productId",cookieProtect, async (req, res)=>{
  try{
   
  let cartUser = await userModel.findOne({email:"gautamhitlar2@gmail.com"})
    cartUser.cart.push(req.params.productId)
    // console.log(req.params.productId)
   await cartUser.save()
  //  req.flash("success", "Added to cart")
    req.session.message = '1 item added in cart';
    res.redirect("/shop")

  }catch(error){
    res.send(error.message)
  }
})

router.get('/cart', async (req, res)=>{
  let cartUser = await userModel.findOne({email:"gautamhitlar2@gmail.com"})
  .populate("cart")
// console.log(cartUser.cart)
// res.send("done")
  res.render("cart.ejs", {cartUser: cartUser.cart})
}) 



router.get("/shop", cookieProtect, async (req, res)=>{
  try {

    const allProduct = await productModel.find()
    
    const cartMsg = req.session.message;
    delete req.session.message;
    res.render("shop.ejs", {allProduct: allProduct, cartMsg})
    
  } catch (error) {
    console.log(error.message)
  }
})

//this is logout rout

router.get("/logout",cookieProtect, async (req, res)=>{
  res.clearCookie("token")
 req.session.message = 'You are logged out!';

 setTimeout(()=>{
  req.session.destroy();

 },3000)

  res.redirect("/")
})


module.exports = router;