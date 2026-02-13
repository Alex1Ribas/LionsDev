const Sticker = require('../data/stickerSchema');

async function listStickers(){
    try {
        const stickersList = await Sticker.find();
        return stickersList;
    } catch (error) {
        console.error('Error listing stickers:', error); 
        throw error;
    };
};
module.exports = listStickers;
