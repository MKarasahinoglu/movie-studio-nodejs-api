const authRepository=require("../repositories/authRepository")

const registerUser=async(user)=>{
    try{
        return registeredUser=await authRepository.registerUser(user)
    }
    catch(err){
        throw err
    }
}

const loginUser=async(user)=>{
    try{
        return tokens=await authRepository.loginUser(user)
    }
    catch(err){
        throw err
    }
}

const refreshToken=async(refreshToken)=>{
    try{
        return accessToken=await authRepository.refreshToken(refreshToken)
    }
    catch(err){
        throw err
    }
}

const logoutUser=async(refreshToken)=>{
    try{
        await authRepository.logoutUser(refreshToken)
        return
    }
    catch(err){
        throw err
    }
}

module.exports={registerUser,loginUser,refreshToken,logoutUser}