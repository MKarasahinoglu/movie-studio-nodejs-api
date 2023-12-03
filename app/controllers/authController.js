const authService=require("../services/authService")

const registerUser=async(req,res)=>{
    try{
        const {email,password}=req.body
        if(!email||!password){
            throw{
                status:400,
                message:"Please check e-mail and password."
            }
        }
        const user={
            email:email,
            password:password
        }
        const registeredUser=await authService.registerUser(user)
        res.status(201).send("Registration successful.")
    }
    catch(err){
        res.status(err.status).send(err.message)
    }
}

const loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body
        if(!email||!password){
            throw{
                status:400,
                message:"Please check e-mail and password."
            }
        }
        const user={
            email:email,
            password:password
        }
        const {accessToken,refreshToken}=await authService.loginUser(user)
        res.cookie("refreshToken",refreshToken,{httpOnly:true,secure:false}).cookie("accessToken",accessToken,{httpOnly:true,secure:false})
        .status(200).send("Logged in.")
    }
    catch(err){
        res.status(err.status).send(err.message)
    }
}

const refreshToken=async(req,res)=>{
    try{
        const refreshToken=req.cookies.refreshToken
        if(!refreshToken){
            throw{
                status:403,
                message:"The session is invalid."
            }
        }
        const accessToken=await authService.refreshToken(refreshToken)
        
        res.cookie("refreshToken",refreshToken,{httpOnly:true,secure:false}).cookie("accessToken",accessToken,{httpOnly:true,secure:false}).status(200).send("Access refreshed.")
    }
    catch(err){
        res.status(err.status).send(err.message)
    }
}

const logoutUser=async(req,res)=>{
    try{
        const refreshToken=req.cookies.refreshToken
        if(!refreshToken){
            throw{
                status:403,
                message:"The session is invalid."
            }
        }
        await authService.logoutUser(refreshToken)
        res.clearCookie("accessToken").clearCookie("refreshToken")
        res.status(200).send("Logged Out.")
    }
    catch(err){
        res.status(err.status).send(err.message)
    }
}

module.exports={registerUser,loginUser,refreshToken,logoutUser}