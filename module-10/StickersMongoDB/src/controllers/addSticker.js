const Sticker = require('../data/stickerSchema');

async function addSticker(number, theme){
    try {
        const newSticker = await Sticker.create({ number, theme });
        return newSticker;
    } catch(error) {
        console.error('Error adding sticker:', error.message);
        throw error;
    };
};
module.exports = addSticker;
