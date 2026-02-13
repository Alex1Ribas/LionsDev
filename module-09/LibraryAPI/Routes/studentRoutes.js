const express = require('express');
const router = express.Router();

const listStudents = require('../students/listStudents');
const addStudent = require('../students/addStudent');
const updateStudents = require('../students/updateStudent');
const deleteStudent = require('../students/deleteStudent');
const searchStudents = require('../students/searchStudents');

router.get('/', listStudents);
router.get('/search', searchStudents);
router.post('/', addStudent);
router.put('/:registrationNumber', updateStudents);
router.delete('/:registrationNumber', deleteStudent);

module.exports = router;