const { id, estudantes, matricula } = require("../data/data");

function addEstudante(req, res){
        
    const novoAluno = {
        id: id.value,
        matricula: matricula.value,
        nome: req.body.nome,
        curso: req.body.curso,
        ano: parseInt(req.body.ano)
    };
                                                    
    
    const estudante = estudantes.find((e) => e.matricula === novoAluno.matricula);

    if(estudante){
    return res.status(400).send({message: "Já existe um usuario com essa matricula"})
    };

    estudantes.push(novoAluno);
    id.value++; matricula.value++;
    
    res.status(201).send({ message: "Adicionado com sucesso!", aluno: novoAluno });
}

module.exports = addEstudante;