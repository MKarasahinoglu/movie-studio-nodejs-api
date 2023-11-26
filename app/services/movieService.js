const movieRepository=require("../repositories/movieRepository")

const getAllMovies=async()=>{
    const movies=await movieRepository.getAllMovies()
    return movies
}

const createMovie=async(newMovie)=>{
    const createdMovie= await movieRepository.createMovie(newMovie)
    return createdMovie
}
const getMovie=async(movieId)=>{
    const movie=await movieRepository.getMovie(movieId)
    return movie
}
const updateMovie=async(movieId,changes)=>{
    const updatedMovie=await movieRepository.updateMovie(movieId,changes)
    return updatedMovie
}

const deleteMovie=async(movieId)=>{
    const deletedMovie=await movieRepository.deleteMovie(movieId)
    return deletedMovie
}

module.exports={getAllMovies,createMovie,getMovie,updateMovie,deleteMovie}