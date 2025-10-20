const { pacientes, consultas } = require("../data/data");

function relatorioPacientes(req, res) {
    const { id } = req.params;
    const idInt = parseInt(id);

    const pacienteEncontrado = pacientes.find(paciente => paciente.id === idInt);
    if (!pacienteEncontrado) {
        return res.status(404).send({ message: "ID do paciente não encontrado!" });}

    const consultasDoPaciente = consultas.filter(consulta => consulta.pacienteid === idInt);
    
    const relatorio = {
        paciente: pacienteEncontrado,
        consultas: consultasDoPaciente
    };

    return res.status(200).send(relatorio);
}

module.exports = relatorioPacientes;