const mongoose = require("mongoose");
const MovimentacaoSchema = new mongoose.Schema({
ProdutoId: {
        type: String,
        required: true
    },
    Tipo: {
        type: String,
        enum: ['entrada', 'saida'],
        required: true
    },
    Quantidade: {
        type: Number,
        required: true
    }, 
},{
        timestamps: true
});

const Movimentacao = mongoose.model("Movimentacao", MovimentacaoSchema);
module.exports = Movimentacao;