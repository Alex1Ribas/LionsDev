const mongoose = require('mongoose');
const FlashCardSchema = new mongoose.Schema({
    BaralhoId: {
        type: String,
        require: true
    },
    pergunta: {
        type: String,
        require: true
    },
    resposta: {
        type: String,
        required: true
    }
});

const FlashCard = mongoose.model("FlashCard", FlashCardSchema);

module.exports = FlashCard