const Sticker = require('../data/stickerSchema');

async function searchStickers(number, theme){
    try {
        const foundStickers = await Sticker.find({ number: number, theme: theme });
        return foundStickers;
    } catch(error) {
        console.error('Error searching stickers:', error.message);
        throw error;
    };
};
module.exports = searchStickers;
