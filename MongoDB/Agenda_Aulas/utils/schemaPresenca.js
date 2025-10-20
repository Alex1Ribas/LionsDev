const mongoose = require('mongoose');

const PresencaSchema = new mongoose.Schema({
    idAula: {
        type: String,
        required: true
    },
    presenca: {
        type: [Object],
        required: true,
        idAluno: {
            type: Number,
            required: true
        },
        presente: {
            type: Boolean,
            required: true
        }
    }
}
);


module.exports = mongoose.model('Presencas', PresencaSchema);