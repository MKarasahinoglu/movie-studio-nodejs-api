const movieService=require("../services/movieService")
const validate=require("../middleware/validate")

const getAllMovies=async(req,res)=>{
    try{
        const movies=await movieService.getAllMovies(req.userEmail)
        res.status(200).send(movies)
    }
    catch(err){
        res.status(err.status).send(err.message)
    }
}

const createMovie=async(req,res)=>{
    try{
        const {body,userEmail}=req
        const {validateResult,errMessage}=validate(body)
        if(!validateResult)
        {
            throw{
                status:400,
                message:errMessage
            }
        }
        const newMovie={
            userEmail:userEmail,
            title:body.title,
            desc:body.desc,
            genre:body.genre,
            releaseDate:body.releaseDate,
            director:{name:body.director.name,bio:body.director.bio}
        }
        const createdMovie=await movieService.createMovie(newMovie)
        res.status(201).send(createdMovie)
    }
    catch(err){
        res.status(err.status).send(err.message)
    }
    
}

const getMovie=async(req,res)=>{
    try{
        const {params,userEmail}=req
        const movie=await movieService.getMovie(params.id,userEmail)
        res.status(200).send(movie)
    }
    catch(err){
        res.status(err.status).send(err.message)
    }
    
}

const updateMovie=async(req,res)=>{
    try{
        const {params,body,userEmail}=req
        if(!body){
            throw{
                status:400,
                message:"Please provide details to update the movie."
            }
        }
        if(body.userEmail){
            throw{
                status:400,
                message:"You cannot update userEmail."
            }
        }
        const updatedMovie=await movieService.updateMovie(params.id,body,userEmail)
        res.status(200).send(updatedMovie)
    }
    catch(err){
        res.status(err.status).send(err.message)
    } 
}

const deleteMovie=async(req,res)=>{
    try{
        const {params,userEmail}=req
        const deletedMovie=await movieService.deleteMovie(params.id,userEmail)
        res.status(200).send(deletedMovie)
    }
    catch(err){
        res.status(err.status).send(err.message)
    }
}

module.exports={getAllMovies,createMovie,getMovie,updateMovie,deleteMovie}