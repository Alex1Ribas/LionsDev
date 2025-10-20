const express = require('express');
const router = express.Router();

const listarPacientes = require('./listarPacientes');
const { adicionarPacientes } = require('./adicionarPacientes');
const atualizarPacientes = require('./atualizarPacientes');
const removerPacientes = require('./removerPaciente');


router.get('/', listarPacientes);
router.post('/', adicionarPacientes);
router.put('/', atualizarPacientes);
router.delete('/:id', removerPacientes);

module.exports = router;