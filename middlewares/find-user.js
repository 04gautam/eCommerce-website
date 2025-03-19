const userModel = require("../models/user-model")

module.exports = async function protect(req, res, next){
try {
  const  {email, password} = req.body
  findUser = await userModel.findOne({email:email, password:password})
  if(!findUser){
  return res.send("no User found register first")
  }
  req.userData = findUser
 
  next()
} catch (error) {
    console.log("something went wrong")
  } 
}
  