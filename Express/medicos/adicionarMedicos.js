const { id, medicos } = require("../data/data");

function adicionarMedicos(req, res) {
    const { nome, especialidade } = req.body;

    if (!nome || !especialidade) {
        return res.status(400).send({ message: "Nome e especialidade são obrigatórios." });
    }

    id.value++;

    const novoMedico = {
        id: id.value,
        nome: nome,
        especialidade: especialidade
    };

    medicos.push(novoMedico);

    res.status(201).send({
        message: "Novo Médico adicionado com sucesso!",
        medico: novoMedico
    });
}

module.exports = { adicionarMedicos };
