const mongoose=require("mongoose")

const directorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    bio:{
        type:String,
        required:true
    }
})

const movieSchema=new mongoose.Schema({
    userEmail:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    releaseDate:{
        type:Date,
        min:"1878-01-01",
        max:new Date().toJSON().slice(0,10)
    },
    director:directorSchema
})

module.exports=mongoose.model("movies",movieSchema)