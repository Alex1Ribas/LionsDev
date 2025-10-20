const express = require('express');
const router = express.Router()

const addMovies = require('../controllersMovies/addMovies')
const listMovies = require('../controllersMovies/listMovies')
const updateMovies = require('../controllersMovies/listMovies')
const deleteMovies = require('../controllersMovies/listMovies')



router.post('/', addMovies);
router.get('/', listMovies);
router.put('/:id', updateMovies);
router.delete('/:id', deleteMovies)

module.exports = router