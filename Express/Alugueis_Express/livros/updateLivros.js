const { livros } = require("../data/data");

function updateLivros(req, res){
    const { id } = req.params;
    const novoTitulo = req.body.titulo;
    const novoAutor = req.body.autor;
    const novoAno = req.body.ano;
    const novoGenero = req.body.genero;


    const livro = livros.find((l) => l.id == id);

    if(!livro){
        return res.status(404).send({ message: "Livro Não encontrado!" });
    }

    livro.titulo = novoTitulo;
    livro.autor = novoAutor;
    livro.ano = novoAno;
    livro.genero = novoGenero
    
    res.status(200).send({
        message: "O Titulo do livro foi atualizado com sucesso!",
        livro: livro,
    });
};

module.exports = updateLivros;