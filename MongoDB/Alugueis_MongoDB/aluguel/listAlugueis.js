const { alugueis } = require("../data/data");

function listAlugueis(req, res) {
  if (alugueis.length === 0) {
    return res.status(404).send({ message: "Nenhum aluguel encontrado" });
  }

  const dadosAluguel = alugueis.map(aluguel => ({
    idLivro: aluguel.idLivro,
    idEstudante: aluguel.idEstudante,
    dataLocacao: aluguel.dataLocacao,
    dataDevolucao: aluguel.dataDevolucao
  }));

  res.status(200).send(dadosAluguel);
}

module.exports = listAlugueis;
