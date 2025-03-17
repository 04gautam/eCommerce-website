const express = require("express")
const router = express.Router()

const ownerModel = require("../models/owners-model")
const productModel = require("../models/product-model")
const upload = require("../config/multer-config")

router.post("/proinfo", upload.single("image"), async (req, res)=>{
  try {
   const {name, price, discount, bgcolor ,panelcolor,textcolor} = (req.body)

   const makeProduct = new productModel({
      image: req.file.buffer,
      name,
      price, 
      discount,
      bgcolor,
      panelcolor,
      textcolor
   })
   await makeProduct.save()

   res.redirect("/product/shop")

  // to Check only

  // console.log(req.file)
  // res.send("done")
    
  } catch (error) {
    res.send(error.message)
  }
})



module.exports = router;