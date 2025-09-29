const { livros } = require("../data/data");

function deleteLivro(req, res){
    const { id } = req.params;
    const index = livros.findIndex((livro) => livro.id == parseInt(id));

    if (index === -1) {
        return res.status(404).send({ message: "Livro não encontrado!"});
    }

    if(alugueis.includes(livros[index])){
        return res.status(400).send({message: "Livro com locação ativa, não é permitido a remoção"})
    };
    
    const deletado = livros.splice(index, 1)[0];
    res
    .status(200)
    .send({ message: "Livro deletado com sucesso!", livro: deletado});
};

module.exports = deleteLivro;