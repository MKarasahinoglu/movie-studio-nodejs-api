const mongoose= require("mongoose")
const moviesCollection=require("../models/movieModel")

const getAllMovies=async(userEmail)=>{
    try{
        const movies=await moviesCollection.find({userEmail:userEmail})
        if(movies.length===0){
            throw{
                status:404,
                message:"No movie was found."
            }
        }
        return movies
    }
    catch(err){
        throw{
            status:err?.status||500,
            message:err.message||err
        }
    }
}

const createMovie=async(newMovie)=>{
    try{
        const isExist=await moviesCollection.findOne({userEmail:newMovie.userEmail,desc:newMovie.desc,title:newMovie.title})
        if(isExist){
            throw{
                status:400,
                message:"The movie already exists."
            }
        }
        const createdMovie=await moviesCollection.create(newMovie)
        return createdMovie
    }
    catch(err){
        throw{
            status:err?.status||500,
            message:err.message||err
        }
    }
}

const getMovie=async(movieId,userEmail)=>{
    try{
        const movie=await moviesCollection.findOne({_id:movieId,userEmail:userEmail})
        if(!movie)
        {
            throw{
                status:400,
                message:"The movie was not found."
            }
        }
        return movie
    }
    catch(err){
        throw{
            status:err?.status||500,
            message:err.message||err
        }
    }
}

const updateMovie=async(movieId,changesMovie,userEmail)=>{
    try{
        const updatedMovie=await moviesCollection.findByIdAndUpdate({_id:movieId,userEmail:userEmail},changesMovie,{new:true})
        if(!updateMovie)
        {
            throw{
                status:400,
                message:"The movie was not found"
            }
        }
        return updatedMovie
    }
    catch(err){
        throw{
            status:err?.status||500,
            message:err.message||err
        }
    }
}

const deleteMovie=async(movieId,userEmail)=>{
    try{
        const deletedMovie=await moviesCollection.findOneAndDelete({_id:movieId,userEmail:userEmail})
        if(!deletedMovie)
        {
            throw{
                status:400,
                message:"The movie was not found."
            }
        }
        return deletedMovie
    }
    catch(err){
        throw{
            status:err?.status||500,
            message:err.message||err
        }
    }
}

module.exports={getAllMovies,createMovie,getMovie,updateMovie,deleteMovie}