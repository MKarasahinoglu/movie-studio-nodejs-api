const app=require("./app/index")
const ConnectDB=require("./app/config/dbConnection")
ConnectDB()
const port=process.env.PORT||3000
app.listen(port,err=>{
    if(err){
        console.error("Server failed to start:",err)
    } 
    else{
        console.log("Server is running on port:",port)
    }
})