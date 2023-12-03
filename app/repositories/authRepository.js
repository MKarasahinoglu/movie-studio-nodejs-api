const mongoose= require("mongoose")
const usersCollection=require("../models/userModel")
const jsonWebToken=require("jsonwebtoken")
const { use } = require("../routes/authRoute")

const registerUser=async(user)=>{
    try{
        const isExist=await usersCollection.findOne({email:user.email})
        if(isExist){
            throw{
                status:400,
                message:"The user already exists."
            }
        }
        const registeredUser=await usersCollection.create(user)
        return registeredUser
    }
    catch(err){
        throw{
            status:err?.status||500,
            message:err.message||err
        }
    }
}

const loginUser=async(user)=>{
    try{
        const foundUser=await usersCollection.findOne({email:user.email,password:user.password})
        if(!foundUser)
        {
            throw{
                status:401,
                message:"Invalid e-mail or password, please try again."
            }
        }
        const accessToken=jsonWebToken.sign({email:user.email},process.env.ACCESS_TOKEN_KEY,{expiresIn:process.env.ACCESS_TOKEN_EXPIRE_TIME})
        const refreshToken=jsonWebToken.sign({email:user.email},process.env.REFRESH_TOKEN_KEY,{expiresIn:process.env.REFRESH_TOKEN_EXPIRE_TIME})
        foundUser.refreshToken=refreshToken
        await foundUser.save()
        return {accessToken,refreshToken}
    }
    catch(err)
    {
        throw{
            status:err?.status||500,
            message:err?.message||err
        }
    }
}

const refreshToken=async(refreshToken)=>{
    try{
        const user=await usersCollection.findOne({refreshToken:refreshToken})
        if(!user)
        {
            throw{
                status:403,
                message:"The session is invalid."
            }
        }
        const accessToken=jsonWebToken.verify(refreshToken,process.env.REFRESH_TOKEN_KEY,(err,user)=>{
            if(err)
            {
                throw{
                    status:403,
                    message:"This session is expired please login."
                }
            }
            const accessToken=jsonWebToken.sign({email:user.email},process.env.ACCESS_TOKEN_KEY,{expiresIn:process.env.ACCESS_TOKEN_EXPIRE_TIME})
            return accessToken
        })
        return accessToken
    }
    catch(err){
        throw{
            status:err?.status||500,
            message:err?.message||err
        }
    }
}

const logoutUser=async(refreshToken)=>{
    try{
        const user=await usersCollection.findOne({refreshToken:refreshToken})
        if(!user)
        {
            throw{
                status:403,
                message:"The session is invalid."
            }
        }
        user.refreshToken=""
        await user.save()
        return
    }
    catch(err){
        throw{
            status:err?.status||500,
            message:err?.message||err
        }
    }
}
module.exports={registerUser,loginUser,refreshToken,logoutUser}