const mongoose = require('mongoose');
const stundetkSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    curso: {
        type: String,
        required: true
    },
    ano: {
        type: String,
        required: true
    },
    matricula: {
        type: Number,
        required: true
    }
});
const student = mongoose.model("student", stundetkSchema);

module.exports = student