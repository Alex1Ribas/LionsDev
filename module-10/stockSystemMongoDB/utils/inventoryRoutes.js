const express = require('express');
const router = express.Router();

const addProduct = require('./addProduct');
const productEntry = require('./registerEntry');
const productExit = require('./registerExit');
const getHistory = require('./getHistory');

////////////////////////////////////////// POST: Add Product
router.post('/add', async (req, res) => {
    try {
        const { name, quantity } = req.body;
        const newProduct = await addProduct(name, quantity);
        res.status(201).send({ message: "Product created successfully", product: newProduct });
    } catch (error) {
        res.status(500).send({ message: "Error creating product", error: error.message });
    }
});

////////////////////////////////////////// POST: Entry (Entrada)
router.post('/entry', async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const newEntry = await productEntry(productId, quantity);
        
        if (!newEntry) {
            res.status(404).send({ message: "Product not found or error processing entry" });
        } else {
            res.status(200).send({ message: "Entry registered successfully", movement: newEntry });
        }
    } catch (error) {
        res.status(500).send({ message: "Error processing entry", error: error.message });
    }
});

////////////////////////////////////////// POST: Exit (Saída)
router.post('/exit/:productId', async (req, res) => {
    try {
        const { productId } = req.params;
        const { quantity } = req.body;
        
        const newExit = await productExit(productId, quantity);
        res.status(200).send({ message: "Exit registered successfully", movement: newExit });
    } catch (error) {
        res.status(500).send({ message: "Error processing exit", error: error.message });
    }
});

////////////////////////////////////////// GET: History
router.get('/history/:productId', async (req, res) => {
    try {
        const { productId } = req.params;
        const history = await getHistory(productId);
        res.status(200).send(history);
    } catch (error) {
        res.status(500).send({ message: "Error fetching history", error: error.message });
    }
});

module.exports = router;
