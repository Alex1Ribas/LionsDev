const {consultas, id } = require("../data/data");

function adicionarConsulta(req, res) {
    id.value++;

    const novaConsulta = {
        id: id.value,
        data: req.body.data,
        medicoid: req.body.idMedico,
        pacienteid: req.body.idPaciente,
        descricao: req.body.descricao
    };

    consultas.push(novaConsulta);

    res.status(201).send({ message: "Consulta criada com sucesso!",
        consulta: novaConsulta
    });
}

module.exports = { adicionarConsulta };
