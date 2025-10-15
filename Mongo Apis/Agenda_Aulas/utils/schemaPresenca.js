const mongoose = require('mongoose');

const PresencaSchema = new mongoose.Schema({
    idAula: {
        type: String,
        ref: 'Aulas',
        required: true
    },
    idAluno: {
        type: String,
        required: true
    },
    presente: {
        type: Boolean,
        required: true
    }
}
);


module.exports = mongoose.model('Presencas', PresencaSchema);