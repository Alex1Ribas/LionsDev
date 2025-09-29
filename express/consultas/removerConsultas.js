const { consultas } = require("../data/data");

function removerConsultas(req, res) {
    const { id } = req.params;
    const idInt = parseInt(id);

    const index = consultas.findIndex(consulta => consulta.id === idInt);

    if (index === -1) {
        return res.status(404).send({ message: "Consulta não encontrada!" });
    }

    const consultaRemovida = consultas.splice(index, 1)[0];

    return res.status(200).send({
        message: "Consulta removida com sucesso.",
        consulta: consultaRemovida
    });
}

module.exports = removerConsultas;
