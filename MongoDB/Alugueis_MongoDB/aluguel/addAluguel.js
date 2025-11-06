
const Alugueis = require("./schemaAlugueis");

async function addAluguel(data){
    try{
    if (!data.idLivro || !data.idEstudante || !data.dataLocacao) {
        return res.status(400).send({
            message: "Não foi encontrado informações validas!"});
        };

    const novaLocacao = await Alugueis.create({
        idLivro,
        idEstudante,
        dataLocacao,
        dataDevolucao
    });
    res.status(201).send({ message: "Adicionado com sucesso!", aluguel: novaLocacao });
    } catch (error) {
        console.error("Erro ao adicionar aluguel:", error);
        res.status(500).send({ message: "Erro interno no servidor." });
    }
}
module.exports = addAluguel;