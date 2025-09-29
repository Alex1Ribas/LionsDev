const { id, livros } = require("../data/data");

function addLivros(req, res){

    const novoLivro = {
        id: id.value,
        titulo: req.body.titulo,
        autor: req.body.autor,
        ano: parseInt(req.body.ano),
        genero: req.body.genero
    };

    livros.push(novoLivro);
    id.value++
    
    res.status(201).send({message: 'Livro adicionado com sucesso!', livro: novoLivro});
}
module.exports = addLivros