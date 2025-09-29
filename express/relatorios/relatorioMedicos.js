const { medicos, consultas } = require("../data/data");

function relatorioMedicos(req, res) {
    const { id } = req.params;
    const idInt = parseInt(id);

    const medicEncontrado = medicos.find(medico => medico.id === idInt);
    if (!medicEncontrado) {
        return res.status(404).send({ message: "ID do medico não encontrado!" });}

    const consultasDoMedico = consultas.filter(consulta => consulta.medicoid === idInt);
    
    const relatorio = {
        medico: medicEncontrado,
        consultas: consultasDoMedico
    };

    return res.status(200).send(relatorio);
}

module.exports = relatorioMedicos;