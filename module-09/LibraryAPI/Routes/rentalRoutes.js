const express = require('express');
const router = express.Router();

const listRentals = require('../Rental/listRentals');
const addRentals = require('../Rental/addRentals');
const updateRentals = require('../Rental/updateRentals');
const deleteRentals = require('../Rental/deleteRentals');
const searchRentals = require('../Rental/searchRentals');
const addReturn = require('../Rental/addReturn');

router.get('/', listRentals);
router.get('/search', searchRentals);
router.post('/', addRentals);
router.post('/return/:id', addReturn);
router.put('/:id', updateRentals);
router.delete('/:id', deleteRentals);

module.exports = router;