const Movimentacao = require("./SchemaMovimentação");

const historico = async (ProdutoId) => {
    try {
        if (!ProdutoId) {
            throw new Error("ID do produto não fornecido");
        };

        const movimentacoes = await Movimentacao.find({ ProdutoId: ProdutoId });
        return movimentacoes;

    } catch (error) {
        console.error("Erro ao listar histórico:", error.message);
        throw error;
    }
};

module.exports = historico;
