const Sticker = require('../data/stickerSchema');

async function deleteSticker(id){
    try {
        const deletedSticker = await Sticker.findByIdAndDelete(id);
        return deletedSticker;
    } catch(error) {
        console.error('Error removing sticker:', error.message);
        throw error;
    };
};
module.exports = deleteSticker;
