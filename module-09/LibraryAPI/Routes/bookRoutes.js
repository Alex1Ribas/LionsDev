const express = require('express');
const router = express.Router();

const listBooks = require('../books/listBooks');
const addBooks = require('../books/addBooks');
const updateBooks = require('../books/updateBooks');
const deleteBooks = require('../books/deleteBooks');
const searchBooks = require('../books/searchBooks');

router.get('/', listBooks);
router.get('/search', searchBooks);
router.post('/', addBooks);
router.put('/:id', updateBooks);
router.delete('/:id', deleteBooks);

module.exports = router;