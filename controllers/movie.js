
const Movie = require('../models/movie');

exports.getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find()
    res.status(200).json({
      message: 'Fetched Movies successfully.',
      movies: movies,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      error: error.message,
    });
  }
};
exports.addMovie = async (req, res, next) => {
  console.log(req.body);
  try {
    const movie =  await new Movie({
      title: req.body.title,
      size: req.body.size,
      movieUrl: req.body.movieUrl
    }).save();
       res.status(201).json({
      message: 'Movie Upload successfully!',
      movie: movie,
    });
  } 
  catch (error) {
    console.log(error.message);
    res.status(404).json({
      error: error,
    });
  }
};
exports.getMovieById = async (req, res, next) => {
  const movieId = req.params.Id;
  try {
    const movie = await Movie.findById(movieId);
    console.log(movie);
    res.status(200).json({ message: 'Movie fetched.', movie: movie });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.getByPagination = async (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = 2;
  try {
    const totalItems = await Movie.find().countDocuments();
    const movies = await Movie.find()
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

    res.status(200).json({
      message: 'Fetched Movies successfully.',
      movies: movies,
      totalItems: totalItems
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      error: error.message,
    });
  }

};
