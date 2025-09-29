const { consultas } = require("../data/data");

function buscaPorConsulta(req, res) {
  const { data, idMedico, idPaciente, descricao } = req.query;

  const results = consultas.filter(c => {
    const dataEncontrada = data ? c.data === data : true;
    const medicoEncontrado = idMedico ? c.idMedico == idMedico : true;
    const pacienteEncontrado = idPaciente ? c.idPaciente == idPaciente : true;
    const descricaoEncontrada = descricao ? c.descricao.toLowerCase().includes(descricao.toLowerCase()) : true;

    return dataEncontrada && medicoEncontrado && pacienteEncontrado && descricaoEncontrada;
  });

  if (results.length === 0) {
    return res.status(404).send("Nenhuma consulta encontrada!");
  }

  res.status(200).send(results);
}

module.exports = buscaPorConsulta;
