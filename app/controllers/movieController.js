const movieService=require("../services/movieService")

const getAllMovies=async(req,res)=>{
    const movies=await movieService.getAllMovies()
    res.status(200).send(movies)
}

const createMovie=async(req,res)=>{
    const {body}=req
    const newMovie={
        title:body.title,
        desc:body.desc,
        genre:body.genre,
        releaseDate:body.releaseDate,
        director:{name:body.director.name,bio:body.director.bio}
    }
    const createdMovie=await movieService.createMovie(newMovie)
    res.status(201).send(createdMovie)
}

const getMovie=async(req,res)=>{
    const {params}=req
    const movie=await movieService.getMovie(params.id)
    res.status(200).send(movie)
}

const updateMovie=async(req,res)=>{
    const {params,body}=req
    const updatedMovie=await movieService.updateMovie(params.id,body)
    res.status(200).send(updatedMovie)
}

const deleteMovie=async(req,res)=>{
    const {params}=req
    const deletedMovie=await movieService.deleteMovie(params.id)
    res.status(200).send(deletedMovie)
}

module.exports={getAllMovies,createMovie,getMovie,updateMovie,deleteMovie}