import mongoose from 'mongoose';

const ReceitaSchema = new mongoose.Schema({
    user:       {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
    dataEntrada:{type: Date, require: true}, 
    valor:      {type: Number, require: true, trim: true},
    pagante:    {type: String, require: true, trim: true},
    descricao:  {type: String, require: true, trim: true},
    status:     {type: String, require: true, enum:[
        "Ativo", "Atrasada", "Quitada" 
    ]},
    metodo:     {type: String, require: true, enum: [
        "DINHEIRO", "PIX", "CARTÃO DE CRÉDITO", "CARTÃO DE DÉBITO", "TRANSFERÊNCIA", "BOLETO"
    ], require: true },  
}, { timestamps: true });

export default mongoose.model('Receita', ReceitaSchema);