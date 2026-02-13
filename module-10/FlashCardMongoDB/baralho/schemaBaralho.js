const mongoose = require("mongoose");
const BaralhoSchema = new mongoose.Schema({
    nome:{
        type: String,
        require: true
    }
});

const Baralho = mongoose.model("Baralho", BaralhoSchema);

module.exports = Baralho