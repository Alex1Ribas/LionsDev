const { pacientes } = require("../data/data");

function buscaPorPaciente(req, res) {
  const { nome, dataNascimento } = req.query;

  const results = pacientes.filter(p => {
    const nomeEncontrado = nome ? p.nome.toLowerCase().includes(nome.toLowerCase()) : true;
    const dataNascimentoEncontrado = dataNascimento ? p.dataNascimento === dataNascimento : true;

    return nomeEncontrado && dataNascimentoEncontrado;
  });

  if (results.length === 0) {
    return res.status(404).send("Nenhum paciente encontrado!");
  }

  res.status(200).send(results);
}

module.exports = buscaPorPaciente;
