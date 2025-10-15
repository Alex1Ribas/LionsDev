const Produto = require("./SchemaProdutos")

const AddProduto = async (Nome, Quantidade) => {
    try{
        const newProduto = new Produto({Nome, Quantidade});
        return await newProduto.save();
    } catch (error){
        console.error("Error adding Produto", error.message);
        throw error;
    }
}
module.exports = AddProduto
