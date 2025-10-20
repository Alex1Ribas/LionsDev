const { estudantes, alugueis } = require("../data/data");


function deleteEstudantes(req, res){
    const { matricula } = req.params;
    const index = estudantes.findIndex((estudante) => estudante.matricula == parseInt(matricula));

    if (index === -1) {
        return res.status(404).send({ message: "Estudante não encontrado!"});
    }

    if(alugueis.includes(estudantes[index])){
        return res.status(400).send({message: "Estudante com alugueis ativos, não é permitido a remoção"})
    };

    const deletado = estudantes.splice(index, 1)[0];
    res
    .status(200)
    .send({ message: "Estudante removido com sucesso!", estudante: deletado});
};

module.exports = deleteEstudantes;