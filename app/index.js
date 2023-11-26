const express=require("express")
const cookieParser=require("cookie-parser")
const { config } = require("dotenv")
require("dotenv").config()
const app=express()
app.use(express.json())
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("OK")
})

module.exports=app