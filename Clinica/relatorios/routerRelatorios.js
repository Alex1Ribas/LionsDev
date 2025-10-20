const express = require('express');
const router = express.Router();

const relatorioPacientes = require('./relatorioPacientes');
const relatorioMedicos = require('./relatorioMedicos');
const relatorioConsultas = require('./relatorioConsultas');
const relatorioMedicosPorPaciente = require('./relatorioMedicosPorPaciente');
const relatorioConsultasPorMes = require('./relatorioConsultasPorMes');

// Consultas de um médico
router.get('/consultas/medico/:id', relatorioMedicos);

// Pacientes atendidos por médico
router.get('/pacientes/medico/:id', relatorioPacientes);

// Consulta por ID (se ainda usar)
router.get('/consultas/:id', relatorioConsultas);

// Médicos que atenderam paciente
router.get('/medicos/paciente/:idPaciente', relatorioMedicosPorPaciente);

// Consultas em um mês específico
router.get('/consultas/mes/:mes', relatorioConsultasPorMes);

module.exports = router;
