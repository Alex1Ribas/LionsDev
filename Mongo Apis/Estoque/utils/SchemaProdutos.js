const mongoose = require("mongoose");
const ProdutoSchema = new mongoose.Schema({
    Nome: {
        type: String,
        required: true
    },
    Quantidade: {
        type: Number,
        required: true
    }
});

const Produto = mongoose.model("Produto", ProdutoSchema);

module.exports = Produto;