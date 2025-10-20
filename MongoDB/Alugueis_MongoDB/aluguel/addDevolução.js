const { alugueis } = require("../data/data");

async function addDevolucao(req, res) {
    try {
        const { id } = req.params;
        const { dataDevolucao: novaDevolucao } = req.body;

        if (!novaDevolucao) {
            return res.status(400).send({ message: "Data de devolução é obrigatória! (ISO)" });
        }

        const aluguel = alugueis.find((a) => a.id == id);

        if (!aluguel) {
            return res.status(404).send({ message: "Locação não encontrada!" });
        }

        if (aluguel.dataDevolucao.trim() !== "") {
            return res.status(400).send({ message: "Livro já devolvido" });
        }

        const validacao = verificaData(aluguel.dataLocacao, novaDevolucao);

        if (!validacao) {
            return res.status(400).send({ message: "Data de devolução inferior à data de locação!" });
        }

        aluguel.dataDevolucao = novaDevolucao;

        return res.status(200).send({
            message: "A devolução foi feita com sucesso!",
            aluguel: aluguel,
        });

    } catch (error) {
        console.error("Erro ao registrar devolução:", error);
        return res.status(500).send({ message: "Erro interno no servidor." });
    }
}

function verificaData(dataLocacao, dataDevolucao) {
    const locacao = new Date(dataLocacao);
    const devolucao = new Date(dataDevolucao);
    return devolucao > locacao;
}

module.exports = addDevolucao;
