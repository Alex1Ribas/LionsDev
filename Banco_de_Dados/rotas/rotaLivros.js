const express = require('express');
const router = express.Router();


const listLivros = require("../livros/listLivros");
const addLivros = require("../livros/addLivros");
const buscarLivros = require("../livros/buscarLivros");
const updateLivros = require('../livros/updateLivros');

/////////////////////////////////////////////////////////////
router.get('/', async (req, res) =>{
    const books = await listLivros();
    res.status(200).send(books);
});

/////////////////////////////////////////////////////////////
router.get('/busca', async (req, res) => {
    const { title, author, year, genre } = req.query;

    if (!title && !author && !year && !genre) {
        return res.status(400).send('Informe pelo menos um parâmetro de busca.');
    }

    try {
        const resultados = await buscarLivros(title, author, year, genre);

        if (resultados.length === 0) {
            return res.status(404).send('Nenhum livro encontrado!');
        }

        res.status(200).json(resultados);
    } catch (error) {
        console.error('Erro ao buscar livros:', error);
        res.status(500).send('Erro no servidor');
    }
});

/////////////////////////////////////////////////////////////
router.post('/', async (req, res) =>{
    const { title, author,year, genre } = req.body;
    const newBook = await addLivros(title,author,year, genre);
    res.status(201).send({message: "Book creat sucessfully!"})
});

/////////////////////////////////////////////////////////////
router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const {title, author, year, genre} = req.body;
    const updateLivros = await updateLivros(id, title, author, year, genre);
    if (updateLivros){
        res.status(200).send({message: "Book has update sucessfully!"});
    } else {
        res.status(404).send({ message: "Books not found"})
    }

});
/////////////////////////////////////////////////////////////
router.delete('/:id', async (req, res) =>{
    const {id} = req.params;
    const deleteLivro = await deleteLivro(id);
    if (deleteLivro){
        res.status(200).send({message: "The Books return to dust"});
    } else {
        res.status(404).send({message: "The books not found"});
    }
});

module.exports = router;