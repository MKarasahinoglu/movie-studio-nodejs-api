const movieRepository=require("../repositories/movieRepository")

const getAllMovies=async(userEmail)=>{
    try{
        const movies=await movieRepository.getAllMovies(userEmail)
        return movies
    }
    catch(err){
        throw err
    }
}

const createMovie=async(newMovie)=>{
    try{
        const createdMovie= await movieRepository.createMovie(newMovie)
        return createdMovie
    } 
    catch(err){
        throw err
    }
}
const getMovie=async(movieId,userEmail)=>{
    try{
        const movie=await movieRepository.getMovie(movieId,userEmail)
        return movie
    } 
    catch(err){
        throw err
    }
}
const updateMovie=async(movieId,changes,userEmail)=>{
    try{
        const updatedMovie=await movieRepository.updateMovie(movieId,changes,userEmail)
        return updatedMovie
    } 
    catch(err){
        throw err
    }
}

const deleteMovie=async(movieId,userEmail)=>{
    try{
        const deletedMovie=await movieRepository.deleteMovie(movieId,userEmail)
        return deletedMovie
    } 
    catch(err){
        throw err
    }
}

module.exports={getAllMovies,createMovie,getMovie,updateMovie,deleteMovie}