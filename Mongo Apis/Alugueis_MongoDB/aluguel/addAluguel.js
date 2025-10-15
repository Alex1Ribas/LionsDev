
const { id, alugueis } = require("../data/data");

const addAluguel = async(req, res) => {
    try{
    if (!req.body.idLivro || !req.body.idEstudante || !req.body.dataLocacao) {
        return res.status(400).send({
            message: "Data de Locação, ID do estudante e ID do livro não podem estar vazios!"});
        };

    const novaLocacao = {
        id: id.value,
        idLivro: parseInt(req.body.idLivro),
        idEstudante: parseInt(req.body.idEstudante),
        dataLocacao: req.body.dataLocacao,
        dataDevolucao: req.body.dataDevolucao
    };


    alugueis.push(novaLocacao);
    id.value++;

    res.status(201).send({ message: "Adicionado com sucesso!", aluguel: novaLocacao });
    } catch (error) {
        console.error("Erro ao adicionar aluguel:", error);
        res.status(500).send({ message: "Erro interno no servidor." });
    }
}
module.exports = addAluguel;