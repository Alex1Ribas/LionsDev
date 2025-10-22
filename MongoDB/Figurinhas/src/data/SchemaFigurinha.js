const mongoose = require('mongoose');

const FigurinhaSchema = new mongoose.Schema({
    numero:{
        type: Number,
        required: true
    },
    tema:{
        type: String,
        required: true
    }
});
 const Figurinha = mongoose.model('Figurinha', FigurinhaSchema);

 module.exports = Figurinha;
