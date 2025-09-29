const express = require('express');
const router = express.Router();

const listLivros = require('../livros/listLivros');
const addLivros = require('../livros/addLivros');
const updateLivros = require('../livros/updateLivros');
const deleteLivro = require('../livros/deleteLivros');
const buscarLivros = require('../livros/buscarLivros');

router.get('/', listLivros);
router.get('/busca', buscarLivros)
router.post('/', addLivros);
router.put('/:id', updateLivros );
router.delete('/:id', deleteLivro);

module.exports = router;