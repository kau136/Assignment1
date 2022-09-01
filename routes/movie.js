const express = require('express');
const movieController = require('../controllers/movie');
const router = express.Router();

router.get('/Get-all', movieController.getMovies);
router.post('/AddMovie',movieController.addMovie);
router.get('/Get-single/:Id', movieController.getMovieById);
router.get('/Get-paginated', movieController.getByPagination);

module.exports = router;
