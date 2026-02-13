const express = require('express');
const router = express.Router();

const listDoctors = require('./listDoctors');
const { addDoctors } = require('./addDoctors');
const updateDoctors = require('./updateDoctors');
const deleteDoctors = require('./deleteDoctors');

router.get('/', listDoctors);
router.post('/', addDoctors);
router.put('/:id', updateDoctors);
router.delete('/:id', deleteDoctors);

module.exports = router;
