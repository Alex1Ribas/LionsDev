const { estudantes } = require("../data/data");

function listEstudantes(req, res) {
  if (estudantes.length === 0) {
    return res.status(404).json({ message: "Nenhum estudante encontrado" });
  }

  const dadosEstudantes = estudantes.map(estudante => ({
    matricula: estudante.matricula,
    nome: estudante.nome,
    curso: estudante.curso,
    ano: estudante.ano
  }));

  res.status(200). send(dadosEstudantes);
}

module.exports = listEstudantes