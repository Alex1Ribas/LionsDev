import mongoose from 'mongoose';

const DespesaSchema = new mongoose.Schema({
    user:        {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    dataSaida:   {type: Date, require: true}, 
    valor:       {type: Number, require: true, trim: true},
    destinatario:{type: String, require: true, trim: true},
    descricao:   {type: String, require: true, trim: true},
    status:      {type: String, require: true, enum:[
        "Ativo", "Atrasada", "Quitada" 
    ]},
    metodo:      {type: String, require: true, enum: [
        "DINHEIRO", "PIX", "CARTÃO DE CRÉDITO", "CARTÃO DE DÉBITO", "TRANSFERÊNCIA", "BOLETO"
    ], require: true },  
}, { timestamps: true });

export default mongoose.model('Despesa', DespesaSchema);