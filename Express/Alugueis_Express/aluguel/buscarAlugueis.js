const { alugueis } = require("../data/data");

function buscarAlugueis(req, res) {
    const { idEstudante, idLivro, dataLocacao, dataDevolucao } = req.query;

    if (!idEstudante && !idLivro && !dataLocacao && !dataDevolucao) {
        return res.status(400).send('Informe pelo menos um parâmetro de busca.');
    }

    const resultados = alugueis.filter(aluguel => {
        return (
            (!idEstudante || aluguel.idEstudante.includes(idEstudante)) &&
            (!idLivro || aluguel.idLivro.includes(idLivro)) &&
            (!dataLocacao || aluguel.dataLocacao.includes(dataLocacao)) &&
            (!dataDevolucao || aluguel.dataDevolucao.includes(dataDevolucao))
        );
    });

    if (resultados.length === 0) {
        return res.status(404).send('Nenhum aluguel encontrado!');
    }

    return res.status(200).send(resultados);
}

module.exports = buscarAlugueis;
