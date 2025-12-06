import mongoose from 'mongoose';

const receitaSchema = new mongoose.Schema({
    dataEntrada: {type: String, require: true, trim: true},
    valor: {type: Number, require: true, trim: true},
    metodo: { type: String, enum: ["DINHEIRO", "CARTÃO DE CRÉDITO", "CARTÃO DE DÉBITO", "TRANSFERÊNCIA", "BOLETO"], require: true },  
    pagante: {type: String, require: true, trim: true},
    descricao: {type: String, require: true, trim: true},
}, { timestamps: true });

export default mongoose.model('Receita', receitaSchema);