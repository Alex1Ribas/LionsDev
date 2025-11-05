const express = require('express');
const router = express.Router();

const listAlugueis = require('../aluguel/listAlugueis');
const addAluguel = require('../aluguel/addAluguel');
const updateAlugueis = require('../aluguel/updateAlugueis');
const deleteAlugueis = require('../aluguel/deleteAlugueis');
const buscarAlugueis = require('../aluguel/buscarAlugueis');
const addDevoluacao = require('../aluguel/addDevolução');

router.get('/', listAlugueis);
router.get('/:id', buscarAlugueis)
router.post('/', addAluguel);
router.post('/:id', addDevoluacao);
router.put('/:id', updateAlugueis );
router.delete('/:id', deleteAlugueis);

module.exports = router;