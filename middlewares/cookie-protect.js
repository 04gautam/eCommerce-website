try{
module.exports = function cookieProtect(req, res, next){
  
    // console.log(req.cookies.token)

    if(req.cookies.token === undefined){
    return res.redirect("/user/register")
    }

    next()
  
}
}catch(error){
    res.send(error.message)
  }