const express = require('express');
const router = express.Router();

const { adicionarConsulta } = require('./adicionarConsulta');
const ListarConsultas = require('./listarCosultas');
const atualizarConsultas = require('./atualizarConsultas');
const removerConsultas = require('./removerConsultas');

router.get('/', ListarConsultas);
router.post('/', adicionarConsulta);
router.put('/', atualizarConsultas);
router.delete('/:id', removerConsultas);

module.exports = router