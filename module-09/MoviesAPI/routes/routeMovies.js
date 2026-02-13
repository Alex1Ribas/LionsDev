const express = require('express');
const router = express.Router();

const addMovies = require('../Movies/addMovies');
const listMovies = require('../Movies/listMovies');
const updateMovies = require('../Movies/updateMovies');
const deleteMovies = require('../Movies/deleteMovies');

router.post('/', addMovies);
router.get('/', listMovies);
router.put('/:id', updateMovies);
router.delete('/:id', deleteMovies);

module.exports = router;