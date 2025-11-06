const mongoose = require('mongoose')

const AlugueisSchema = new mongoose.Schema =({
    idLivro:  {type: String, require: true},
    idEstudante:  {type: String, require: true},
    dataLocacao: {type: String, require: true},
    dataDevolucao: {type: String,}
});
const Alugueis =mongoose.model("Alugueis", AlugueisSchema)

module.exports = Alugueis