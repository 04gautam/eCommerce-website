const mongoose =  require("mongoose")

const ownerSchema = mongoose.Schema({
fullname:{
  type: String,
  minLength: 3,
  trim: true
},
email:String,
passwor: String,
picture: String,

})

module.exports = mongoose.model("owner", ownerSchema)