const Movimentacao = require("./SchemaMovimentação");
const Produto = require("./SchemaProdutos");

const EntradaProduto = async (ProdutoId, Quantidade) => {
    try {
        const prod = await Produto.findById(ProdutoId);

        if (!prod) {
            console.error("Erro ao encontrar produto");
            return;
        }

        const novaMovimentacao = new Movimentacao({
            ProdutoId: ProdutoId,
            Tipo: "entrada",
            Quantidade: Quantidade,
        });

        await novaMovimentacao.save(); 

        await Produto.findByIdAndUpdate(
            ProdutoId,
            { $inc: { Quantidade: Quantidade } },
            { new: true }
        );

        return novaMovimentacao;
    } catch (error) {
        console.error("Erro ao registrar entrada", error.message);
        throw error;
    }
};

module.exports = EntradaProduto;
