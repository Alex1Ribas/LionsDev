const Book = require('./schemaLivros')
async function buscarLivros(titulo, autor, ano, genero) {
    const filtros = {}; //armazena o resultados

    if (titulo) filtros.titulo = { $regex: titulo, $options: 'i' };
    if (autor) filtros.autor = { $regex: autor, $options: 'i' };
    if (ano) filtros.ano = parseInt(ano);
    if (genero) filtros.genero = { $regex: genero, $options: 'i' };
// $regex === includes  &  $options: 'i' === toLowerCase()
    return await Book.find(filtros);
}

module.exports = buscarLivros;
