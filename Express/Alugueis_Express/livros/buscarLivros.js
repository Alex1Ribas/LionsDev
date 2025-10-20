const { livros } = require("../data/data");

function buscarLivros(req, res) {
    const { titulo, ano, autor, genero } = req.query;

    if (!titulo && !ano && !autor && !genero) {
        return res.status(400).send('Informe pelo menos um parâmetro de busca.');
    }

    const resultados = livros.filter(livro => {
        return (
            (!titulo || (livro.titulo && livro.titulo.toLowerCase().includes(titulo.toLowerCase()))) &&
            (!ano || (livro.ano && livro.ano.toString().includes(ano))) &&//toString() para conseguir usar o includes()
            (!autor || (livro.autor && livro.autor.toLowerCase().includes(autor.toLowerCase()))) &&
            (!genero || (livro.genero && livro.genero.toLowerCase().includes(genero.toLowerCase())))
            //Parametro = true || condição se o paramentro for falso ele roda a condição armazenadno como a variavel && verifica o priximo parametro
        );
    });

    if (resultados.length === 0) {
        return res.status(404).send('Nenhum livro encontrado!');
    }

    return res.status(200).send(resultados);
}

module.exports = buscarLivros;
