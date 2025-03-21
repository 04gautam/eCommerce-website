const express = require("express")
const { route } = require("./ownersRouter")
const cookieProtect = require("../middlewares/cookie-protect")
const findUser = require("../middlewares/find-user")
const userModel = require("../models/user-model")
const router = express.Router()
const productModel = require("../models/product-model")
const jwt = require("jsonwebtoken")
const { default: mongoose } = require("mongoose")



router.get("/cart/:productId",cookieProtect, async (req, res)=>{
  try{


    const {token} = req.cookies

    let decodedEmail = jwt.verify(token, process.env.JWT_KEY);
   
  let cartUser = await userModel.findOne({email:decodedEmail})
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

router.get('/cart',cookieProtect, async (req, res)=>{
try {

  const {token} = req.cookies

  let decodedEmail = jwt.verify(token, process.env.JWT_KEY);
 

  let cartUser = await userModel.findOne({email:decodedEmail})
  .populate("cart")
// console.log(cartUser.cart)
// res.send("done")
  res.render("cart.ejs", {cartUser: cartUser.cart})

} catch (error) {
  res.send(error)
}

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

  try {
    res.clearCookie("token")
    req.session.message = 'You are logged out!';
   
    setTimeout(()=>{
     req.session.destroy();
   
    },3000)
   
     res.redirect("/")
  } catch (error) {
    res.send(error.message)
  }
 
})

router.get("/buy/:itemId", cookieProtect,(req, res)=>{
  try {
      // console.log(req.params.itemId)
      res.send("done")
  } catch (error) {
    res.send(error.message)
  }

})

router.get("/delete/:deleteId", cookieProtect, async(req, res)=>{
  try {
    const {token} = req.cookies;
    const {deleteId} = req.params;

    // decoding the email
    let decodedEmail = jwt.verify(token, process.env.JWT_KEY);
    // console.log(decodedEmail)

    const deleteResult = await userModel.updateOne(
      {email: decodedEmail},
      { $pull: {cart: deleteId}}
    );
 
    
    // console.log("Delete Id", req.params.deleteId);
    // console.log("Delete Result", deleteResult)

      res.redirect("/cart")
  } catch (error) {
    res.send(error)
  }

})

module.exports = router;