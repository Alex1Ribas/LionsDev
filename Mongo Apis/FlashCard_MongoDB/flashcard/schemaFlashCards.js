const mongoose = require('mongoose');
const FlashCardSchema = new mongoose.Schema({
    BaralhoId: {
        type: String,
        required: true
    },
    pergunta: {
        type: String,
        required: true
    },
    resposta: {
        type: String,
        required: true
    }
});

const FlashCard = mongoose.model("FlashCard", FlashCardSchema);

module.exports = FlashCard