const { consultas } = require("../data/data");

function relatorioConsultasPorMes(req, res) {
  const { mes } = req.params; // exemplo: '2024-08'

  const consultasDoMes = consultas.filter(c => c.data.startsWith(mes));

  if (consultasDoMes.length === 0) {
    return res.status(404).send({ message: `Nenhuma consulta encontrada para o mês ${mes}` });
  }

  res.status(200).send({
    mes,
    consultas: consultasDoMes
  });
}

module.exports = relatorioConsultasPorMes;
