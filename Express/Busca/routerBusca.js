const express = require('express');
const router = express.Router();


const buscaPorConsulta = require('./buscaPorConsulta');
const buscaPorMedico = require('./buscaPorMedico');
const buscaPorPaciente = require('./buscaPorPaciente');

router.get('/', buscaPorConsulta)
router.get('/', buscaPorMedico)
router.get('/', buscaPorPaciente)


module.exports = router