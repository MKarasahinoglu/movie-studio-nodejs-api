const express=require("express")
const router=express.Router()
const movieController=require("../controllers/movieController")
const checkAccessToken=require("../middleware/checkAccessToken")

router.get("/movies",checkAccessToken,movieController.getAllMovies)
router.post("/movies",checkAccessToken,movieController.createMovie)
router.get("/movies/:id",checkAccessToken,movieController.getMovie)
router.patch("/movies/:id",checkAccessToken,movieController.updateMovie)
router.delete("/movies/:id",checkAccessToken,movieController.deleteMovie)

module.exports=router