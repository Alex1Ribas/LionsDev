const { medicos, consultas } = require("../data/data");

function relatorioMedicosPorPaciente(req, res) {
  const { idPaciente } = req.params;
  const idInt = parseInt(idPaciente);

  const consultasDoPaciente = consultas.filter(c => c.pacienteid === idInt);
  if (consultasDoPaciente.length === 0) {
    return res.status(404).send({ message: "Nenhuma consulta encontrada para esse paciente!" });
  }

  const idsMedicos = [...new Set(consultasDoPaciente.map(c => c.medicoid))];

  const medicosAtenderam = medicos.filter(m => idsMedicos.includes(m.id));

  res.status(200).send({
    pacienteId: idInt,
    medicos: medicosAtenderam
  });
}

module.exports = relatorioMedicosPorPaciente;
