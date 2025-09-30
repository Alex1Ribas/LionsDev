const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const lsBaralho = await ListBaralho();
    res.status(200).send(lsBaralho);
});
///////////////////////////////////////////
router.post('/', async (req, res) => {
    const { nome } = req.body;
    const newBaralho = await AddBaralho(nome);
    res.status(201).send({message: "Baralho Create sucessfully", Baralho: newBaralho});
});
///////////////////////////////////////////
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;
    const BaralhoAtualizado = await UpdateBaralho(id, nome);
    res.status(200).send({message: "Baralho updated sucessfully", Baralho: BaralhoAtualizado});
});
//////////////////////////////////////////
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await deleteBaralho(id);
    res.status(200).send({message: "Baralho deleted sucessfully"});
});
module.exports = router;   