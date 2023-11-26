const express=require("express")
const cookieParser=require("cookie-parser")
const { config } = require("dotenv")
require("dotenv").config()
const app=express()
app.use(express.json())
app.use(cookieParser())
app.use("/api",require("./routes/movieRoute"))

module.exports=app