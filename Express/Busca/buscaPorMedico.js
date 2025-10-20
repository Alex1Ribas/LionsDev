const { medicos } = require("../data/data");

function buscaPorMedico(req, res) {
  const { nome, especialidade } = req.query;

  const results = medicos.filter(m => {
    const nomeEncontrado = nome ? m.nome.toLowerCase().includes(nome.toLowerCase()) : true;
    const especialidadeEncontrada = especialidade ? m.especialidade.toLowerCase().includes(especialidade.toLowerCase()) : true;
    return nomeEncontrado && especialidadeEncontrada;
  });

  if (results.length === 0) {
    return res.status(404).send("Nenhum médico encontrado!");
  }

  res.status(200).send(results);
}

module.exports = buscaPorMedico;
