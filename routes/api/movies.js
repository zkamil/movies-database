const express = require('express');
const router = express.Router();

const Movie = require('../../models/Movies');

// @route GET api/movies
// @desc Get All Movies
// @access Public
router.get('/', (req, res) => {
  Movie.find()
            .sort({ date: -1})
            .then(movies => res.json(movies))
        });

// @route POST api/movies
// @desc Create an Movie
// @access Public
router.post('/', (req, res) => {
  const newMovie = new Movie({
    name: req.body.name
  });
  
  newMovie.save().then(movie => res.json(movie));
        });

// @route DELETE api/movies
// @desc Delete an Movie
// @access Public
router.delete('/:id', (req, res) => {
  Movie.findById(req.params.id)
   .then(movie => movie.remove().then(() => res.json({success: true})))
   .catch(err => res.status(404).json({success:false}));
  });
  
module.exports = router;
