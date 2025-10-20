const { consultas } = require("../data/data");

function atualizarConsultas(req, res) {
    const {id} = req.params
    const idInt = parseInt(id)
    const { idMedico, idPaciente, data } = req.body;

    if (!idMedico || !idPaciente || !data) {
        return res.status(400).send({
            message: 'Todos os campos (idMedico, idPaciente, data) são obrigatórios.'
        });
    }

    const index = consultas.findIndex(consulta => consulta.id === idInt);

    if (index === -1) {
        return res.status(404).send({ message: 'Consulta não encontrada.' });
    }

    consultas[index] = {
        ...consultas[index],
        idMedico,
        idPaciente,
        data,
    };

    return res.status(200).send({
        message: 'Consulta atualizada com sucesso.',
        consulta: consultas[index],
    });
}

module.exports = atualizarConsultas;
