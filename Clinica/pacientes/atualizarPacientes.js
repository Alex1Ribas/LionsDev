const { pacientes } = require("../data/data");

function atualizarPacientes(req, res) {
    const {id} = req.params
    const idInt = parseInt(id)
    const { nome, dataNascimento } = req.body;

    if (!nome || !dataNascimento) {
        return res.status(400).send({ message: 'Todos os campos (nome, Data de Nascimento) são obrigatórios.' });
    }

    const index = pacientes.findIndex(paciente => paciente.id === idInt);

    if (index === -1) {
        return res.status(404).send({ message: 'Paciente não encontrado.' });
    }

    pacientes[index] = {
        ...pacientes[index],
        nome,
        dataNascimento,
    };

    return res.status(200).send({
        message: 'Paciente atualizado com sucesso.',
        paciente: pacientes[index],
    });
}

module.exports = atualizarPacientes;
