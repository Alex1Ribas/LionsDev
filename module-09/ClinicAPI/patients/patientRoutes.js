const express = require('express');
const router = express.Router();

const listPatients = require('./listPatients');
const { addPatients } = require('./addPatients');
const updatePatients = require('./updatePatients');
const deletePatient = require('./deletePatient');

router.get('/', listPatients);
router.post('/', addPatients);
router.put('/:id', updatePatients);
router.delete('/:id', deletePatient);

module.exports = router;
