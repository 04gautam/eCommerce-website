const userModel = require("../models/user-model")

module.exports = async function protect(req, res, next){
try {
  const  {email, password} = req.body
  finduser = await userModel.findOne({email:email, password:password})
  if(!finduser){
  return res.send("no User found register first")
  }
  // console.log(finduser)
  next()
} catch (error) {
    console.log("something went wrong")
  } 
}
  