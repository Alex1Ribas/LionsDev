const express = require('express');
const router = express.Router();

const listRentals = require('../Rentals/listRentals');
const addRental = require('../Rentals/addRental');
const updateRentals = require('../Rentals/updateRentals');
const deleteRentals = require('../Rentals/deleteRentals');
const searchRentals = require('../Rentals/searchRentals');
const addReturn = require('../Rentals/addReturn');

router.post('/', addRental);

router.get('/', async(req, res) =>{
    try{
      const list = await listRentals();
      return res.status(200).json({
        message: "Rentals list:",
        rentals: list})
    } catch(error){
        console.error("Error executing function", error.message)
        res.status(500).send("Internal error");
    }
});

router.put('/:id', updateRentals);

router.delete('/:id', deleteRentals);

router.post('/return/:id', addReturn);

router.get('/search', searchRentals);

module.exports = router;
