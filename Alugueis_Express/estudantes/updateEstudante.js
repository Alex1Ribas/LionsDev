const { estudantes } = require("../data/data");

function updateEstudantes(req, res){

    const { matricula } =(req.params);
    const novoNome = req.body.nome;
    const novoCurso = req.body.curso;
    const novoAno = req.body.ano;


    const estudante = estudantes.find((e) => e.matricula == parseInt(matricula));

    if(!estudante){
        return res.status(404).send({ message: "Estudante Não encontrada!" });
    }

   estudante.nome = novoNome
   estudante.curso = novoCurso
   estudante.ano = novoAno

    
    res.status(200).send({
        message: "Estudante foi atualizado com sucesso!",
        estudante: estudante,
    });
};

module.exports = updateEstudantes;