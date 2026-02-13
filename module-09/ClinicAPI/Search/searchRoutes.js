const express = require('express');
const router = express.Router();

const searchByAppointment = require('./searchByAppointment');
const searchByDoctor = require('./searchByDoctor');
const searchByPatient = require('./searchByPatient');

// Specific search endpoints
router.get('/appointments', searchByAppointment);
router.get('/doctors', searchByDoctor);
router.get('/patients', searchByPatient);

module.exports = router;
