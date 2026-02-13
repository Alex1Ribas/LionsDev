const express = require('express');
const router = express.Router();

const addSticker = require('../controllers/addSticker');
const listStickers = require('../controllers/listStickers');
const updateSticker = require('../controllers/updateSticker');
const deleteSticker = require('../controllers/deleteSticker');
const searchStickers = require('../controllers/searchStickers');

router.post('/add', async (req, res) => {
    try {
        const { number, theme } = req.body;
        const newSticker = await addSticker(number, theme);
        res.status(201).json({ 
            message: 'Sticker created successfully!', 
            sticker: newSticker 
        });
    } catch (error) {
        console.error('Error adding sticker:', error);
        res.status(500).json({ message: 'Error adding sticker' });
    }
});

router.get('/list', async (req, res) => {
    try {
        const stickers = await listStickers();
        res.status(200).json(stickers);
    } catch (error) {
        console.error('Error listing stickers:', error);
        res.status(500).json({ message: 'Error listing stickers' });
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { number, theme } = req.body;
        const updatedSticker = await updateSticker(id, number, theme);
        
        if (updatedSticker) {
            res.status(200).json({ 
                message: 'Sticker updated successfully!', 
                sticker: updatedSticker 
            });
        } else {
            res.status(404).json({ message: 'Sticker not found' });
        }
    } catch (error) {
        console.error('Error updating sticker:', error);
        res.status(500).json({ message: 'Error updating sticker' });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await deleteSticker(id);
        
        if (deleted) {
            res.status(200).json({ 
                message: 'Sticker removed successfully!', 
                sticker: deleted 
            });
        } else {
            res.status(404).json({ message: 'Sticker not found' });
        }
    } catch (error) {
        console.error('Error removing sticker:', error);
        res.status(500).json({ message: 'Error removing sticker' });
    }
});

router.get('/search', async (req, res) => {
    try {
        const { number, theme } = req.query;
        const foundStickers = await searchStickers(number, theme);
        res.status(200).json(foundStickers);
    } catch (error) {
        console.error('Error searching stickers:', error);
        res.status(500).json({ message: 'Error searching stickers' });
    }
});

module.exports = router;
