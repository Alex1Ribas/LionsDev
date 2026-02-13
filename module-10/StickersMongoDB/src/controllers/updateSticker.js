const Sticker = require('../data/stickerSchema')

async function updateSticker(id, number, theme) {
    try {
        const updatedSticker = await Sticker.findByIdAndUpdate(id, { number, theme }, { new: true });
        return updatedSticker;
    } catch (error) {
        console.error('Error updating sticker:', error.message);
        throw error;
    };
};

module.exports = updateSticker;
