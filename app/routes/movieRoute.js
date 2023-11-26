const express=require("express")
const router=express.Router()
const movieController=require("../controllers/movieController")

router.get("/movies",movieController.getAllMovies)
router.post("/movies",movieController.createMovie)
router.get("/movies/:id",movieController.getMovie)
router.patch("/movies/:id",movieController.updateMovie)
router.delete("/movies/:id",movieController.deleteMovie)

module.exports=router