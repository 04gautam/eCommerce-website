const express = require("express")
const app = express()
require("dotenv").config()

const db = require("./config/mongoose-connection")
const cookieParser = require("cookie-parser")
const path = require("path")
const ownersRouter = require("./routes/ownersRouter")
const productsRouter = require("./routes/productsRouter")
const usersRouter = require("./routes/usersRouter")
const indexRouter = require("./routes/index")
const multer = require("multer")


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")

app.use("/owner", ownersRouter)
app.use("/product", productsRouter)
app.use("/", usersRouter)
app.use("/", indexRouter)



app.listen(3000, ()=>console.log("Server is connected on 3000 port"))