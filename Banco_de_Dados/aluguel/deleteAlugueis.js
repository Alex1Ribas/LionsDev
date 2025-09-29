const { alugueis } = require("../data/data");

function deleteAlugueis(req, res){
    const { id } = req.params;
    const index = alugueis.findIndex((aluguel) => aluguel.id == parseInt(id));

    if (index === -1) {
        return res.status(404).send({ message: "aluguel não encontrado!"});
    }

    if(!alugueis[index].dataDevolucao){
        return res.status(400).send({message: "Livro não devolvido, não foi permitido a remoção do aluguel"})
    }
    
    const deletado = alugueis.splice(index, 1)[0];
    res
    .status(200)
    .send({ message: "Alugel deletado com sucesso!", alugel: deletado});
};

module.exports = deleteAlugueis;