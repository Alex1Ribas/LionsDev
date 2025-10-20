const { alugueis } = require("../data/data");

function addDevoluacao(req, res){

    const { id } = req.params;
    const novaDevolução = req.body.dataDevolucao;

    if(!novaDevolução){
        return res.status(404).send({message: "Data de devolução é obrigatoria!(iso)"})
    }

    const aluguel = alugueis.find((a) => a.id == id);

    if(!aluguel){
        return res.status(404).send({ message: "Locação Não encontrada!" });
    }

if(aluguel.dataDevolucao.trim() !== ""){
    return res.status(400).send({message: 'Livro já devolvido'})
};

 const validacao = verificaData(aluguel.dataLocacao, novaDevolução)
 
 if(validacao){

   aluguel.dataDevolucao = novaDevolução;
    
     return res.status(200).send({
        message: "A devolução foi feita com sucesso!",
        aluguel: aluguel,
    });
} 
return res.status(400).send({message: "Data de devolução inferior a data de locação!"})
};

function verificaData(dataLocacao, dataDevolucao){
    const locacao = new Date(dataLocacao);
    const devolucao = new Date(dataDevolucao);
    if(devolucao > locacao){
        return true
    }
    return false
}

module.exports = addDevoluacao;

