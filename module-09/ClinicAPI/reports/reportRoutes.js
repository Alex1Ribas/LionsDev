const express = require('express');
const router = express.Router();

const patientReport = require('./patientReport');
const doctorReport = require('./doctorReport');
const appointmentReport = require('./appointmentReport');
const doctorReportByPatient = require('./doctorReportByPatient');
const appointmentReportByMonth = require('./appointmentReportByMonth');

// Appointments for a specific doctor
router.get('/appointments/doctor/:id', doctorReport);

// Patients treated by a specific doctor
router.get('/patients/doctor/:id', patientReport);

// Detailed appointment report by ID
router.get('/appointments/:id', appointmentReport);

// Doctors who treated a specific patient
router.get('/doctors/patient/:patientId', doctorReportByPatient);

// Appointments in a specific month (YYYY-MM)
router.get('/appointments/month/:month', appointmentReportByMonth);

module.exports = router;
