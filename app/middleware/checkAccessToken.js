const jsonWebToken=require("jsonwebtoken")

const checkAccessToken=(req,res,next)=>{
    const accessToken=req.cookies.accessToken
    if(!accessToken) return res.status(403).send("The session is invalid.")

    jsonWebToken.verify(accessToken,process.env.ACCESS_TOKEN_KEY,(err,user)=>{
        if (err) return res.status(403).send("This session is expired please login.")
        req.userEmail=user.email
        next()
    })
}

module.exports=checkAccessToken

