const { consultas, pacientes, medicos } = require("../data/data");

function relatorioConsultas(req, res) {
    const { id } = req.params;
    const idInt = parseInt(id);

    const consulta = consultas.find(consulta => consulta.id === idInt);
    if (!consulta) {
        return res.status(404).send({ message: "ID da consulta não encontrado!" });
    }

    const paciente = pacientes.find(p => p.id === consulta.pacienteid);
    const medico = medicos.find(m => m.id === consulta.medicoid);

    const relatorio = {
        id: consulta.id,
        data: consulta.data,
        paciente: paciente || { message: "Paciente não encontrado" },
        medico: medico || { message: "Médico não encontrado" }
    };

    return res.status(200).send(relatorio);
}

module.exports = relatorioConsultas;
