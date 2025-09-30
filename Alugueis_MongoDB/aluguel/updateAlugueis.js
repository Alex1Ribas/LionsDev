const { alugueis } = require("../data/data");

function updateAlugueis(req, res){

    const { id } = req.params;
    const novoIdLivro = req.body.idLivro;
    const novoIdEstudante = req.body.idEstudante;
    const novaLocacao = req.body.dataLocacao;
    const novaDevolução = req.body.dataDevolucao;


    const aluguel = alugueis.find((a) => a.id == id);

    if(!aluguel){
        return res.status(404).send({ message: "Locação Não encontrada!" });
    }

   aluguel.idLivro = novoIdLivro;
   aluguel.idEstudante = novoIdEstudante;
   aluguel.dataLocacao = novaLocacao;
   aluguel.dataDevolucao = novaDevolução;
    
    res.status(200).send({
        message: "A locação foi atualizado com sucesso!",
        aluguel: aluguel,
    });
};

module.exports = updateAlugueis;