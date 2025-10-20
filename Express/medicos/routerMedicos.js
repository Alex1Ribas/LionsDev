const express = require('express');
const router = express.Router();

const listarMedicos = require('./listaMedicos');
const { adicionarMedicos } = require('./adicionarMedicos');
const atualizarMedicos = require('./atualizarMedicos');
const removerMedicos = require('./removerMedicos');


router.get('/', listarMedicos);
router.post('/', adicionarMedicos);
router.put('/', atualizarMedicos );
router.delete('/:id', removerMedicos);

module.exports = router;
