const express = require('express');
const router = express.Router();

const listEstudantes = require('../estudantes/listEstudantes');
const addEstudante = require('../estudantes/addEstudante');
const updateEstudantes = require('../estudantes/updateEstudante');
const deleteEstudantes = require('../estudantes/deleteEstudante');
const buscarEstudantes = require('../estudantes/buscarEstudantes');

router.get('/', listEstudantes);
router.get('/busca', buscarEstudantes);
router.post('/', addEstudante);
router.put('/:id', updateEstudantes );
router.delete('/:id', deleteEstudantes);

module.exports = router;