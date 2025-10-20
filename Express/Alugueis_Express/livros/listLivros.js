const { livros } = require("../data/data");

function listLivros(req, res) {
  if (livros.length === 0) {
    return res.status(404).json({ message: "Nenhum livro encontrado" });
  }

  const dadoslivros = livros.map(livro => ({
    titulo: livro.titulo,
    autor: livro.autor,
    ano: livro.ano,
    genero: livro.genero
  }));

  res.status(200). send(dadoslivros);
}

module.exports = listLivros