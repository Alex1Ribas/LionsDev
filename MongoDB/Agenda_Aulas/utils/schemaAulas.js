const mongoose = require('mongoose');

const AulasSchema = new mongoose.Schema({
    idProfessor: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        required: true
    },
    assunto: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Aulas', AulasSchema);