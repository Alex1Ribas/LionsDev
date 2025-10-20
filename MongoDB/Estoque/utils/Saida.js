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
            Tipo: "saida",
            Quantidade: Quantidade,
        });

        await novaMovimentacao.save(); 

        await Produto.findByIdAndUpdate(
            ProdutoId,
            { $inc: { Quantidade: -Quantidade } },
            { new: true }
        );

        const novaQuantidade = prod.Quantidade + Quantidade;
        prod.Quantidade = novaQuantidade;

        await prod.save(); 

        return novaMovimentacao;

    } catch (error) {
        console.error("Erro ao registrar Saida", error.message);
        throw error;
    }
};

module.exports = EntradaProduto;
