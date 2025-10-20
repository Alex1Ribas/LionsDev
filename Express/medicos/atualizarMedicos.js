const { medicos } = require("../data/data");


function atualizarMedicos(req, res) {
    const {id} = req.params
    const idInt = parseInt(id)
    const { nome, especialidade } = req.body;

    if (!nomeMedico || !especialidade) {
        return res.status(400).send({ message: 'Todos os campos (nome, especialidade) são obrigatórios.' });
    }

    const index = medicos.findIndex(medico => medico.id === idInt);

    if (index === -1) {
        return res.status(404).send({ message: 'Médico não encontrado.' });
    }

    medicos[index] = {
        ...medicos[index],
        nome: nome,
        especialidade: especialidade
    };

    return res.status(200).send({ message: 'Usuário atualizado com sucesso.', medico: medicos[index] });
}

module.exports = atualizarMedicos;
