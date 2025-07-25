const express = require("express")
const router = express.Router()
const productModel = require("../models/product-model")
const cookieProtect = require("../middlewares/cookie-protect")
const upload = require("../config/multer-config")


router.post("/proinfo", upload.single("image"), async (req, res)=>{
  try {
   const {name, price, discount, bgcolor ,panelcolor,textcolor, discription} = (req.body)

   const makeProduct = new productModel({
      image: req.file.buffer,
      name,
      price, 
      discount,
      bgcolor,
      panelcolor,
      textcolor,
      discription

   })
   await makeProduct.save()

   res.redirect("/shop")

  // to Check only

  // console.log(req.file)
  // res.send("done")
    
  } catch (error) {
    res.send(error.message)
  }
})



router.get("/stark", cookieProtect,(req, res)=>{
  try {
    res.render("admin-panel.ejs")
    
  } catch (error) {
    console.log(error.message)
  }
})


router.get("/delete", (req, res)=>{
  res.render("deleteItems.ejs")
})

router.post("/delete-product", async(req, res)=>{
try {
  let deleteProduct = req.body.productName

 let deletedItem = await productModel.findOneAndDelete({name:deleteProduct})

 if(!deletedItem){
  return res.send("There is no such product ")

 }
  
//  console.log(deletedItem)
  res.send("Deleted")

} catch (error) {
  console.log(error.message)
}

})


module.exports = router;