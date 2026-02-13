const express = require('express');
const router = express.Router();

const { addAppointment } = require('./addAppointment');
const listAppointments = require('./listAppointments');
const updateAppointments = require('./updateAppointments');
const deleteAppointments = require('./deleteAppointments');

router.get('/', listAppointments);
router.post('/', addAppointment);
router.put('/:id', updateAppointments);
router.delete('/:id', deleteAppointments);

module.exports = router;
