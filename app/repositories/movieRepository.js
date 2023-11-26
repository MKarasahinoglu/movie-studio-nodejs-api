const mongoose= require("mongoose")
const moviesCollection=require("../models/movieModel")

const getAllMovies=async()=>{
    const movies=await moviesCollection.find()
    return movies
    
}

const createMovie=async(newMovie)=>{
    const createdMovie=await moviesCollection.create(newMovie)
    return createdMovie
}

const getMovie=async(movieId)=>{
    const movie=await moviesCollection.findOne({_id:movieId})
    return movie
}

const updateMovie=async(movieId,changesMovie)=>{
    const updatedMovie=await moviesCollection.findByIdAndUpdate(movieId,changesMovie,{new:true})
    return updatedMovie
}

const deleteMovie=async(movieId)=>{
    const deletedMovie=await moviesCollection.findByIdAndDelete(movieId)
    return deletedMovie
}

module.exports={getAllMovies,createMovie,getMovie,updateMovie,deleteMovie}