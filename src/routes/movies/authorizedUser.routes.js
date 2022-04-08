
import express from 'express'
const router = express.Router();

const controllers = require('../../controllers/movies/postMovie.controller');

router.post("/movies", controllers.postMovies);   // Only Authorized User can post movies


module.exports = router;