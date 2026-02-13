const express = require('express');
const router = express.Router();

const listBaralho = require('./ListBaralho');
const addBaralho = require('./AddBaralho');
const updateBaralho = require('./updateBaralho');
const deleteBaralho = require('./deleteBaralho');

///////////////////////////////////////////GET
router.get('/', async (req, res) => {
    const lsBaralho = await listBaralho();
    res.status(200).send(lsBaralho);
});
///////////////////////////////////////////POST
router.post('/', async (req, res) => {
    const { nome } = req.body;
    const newBaralho = await addBaralho(nome);
    res.status(201).send({message: "Baralho Create sucessfully", Baralho: newBaralho});
});
///////////////////////////////////////////PUT
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;
    const BaralhoAtualizado = await updateBaralho(id, nome);
    res.status(200).send({message: "Baralho updated sucessfully", Baralho: BaralhoAtualizado});
});
///////////////////////////////////////////DELETE
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await deleteBaralho(id);
    res.status(200).send({message: "Baralho deleted sucessfully"});
});
module.exports = router;   