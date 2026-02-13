const mongoose = require('mongoose');

const StickerSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    theme: {
        type: String,
        required: true
    }
});

const Sticker = mongoose.model('Sticker', StickerSchema);

module.exports = Sticker;
