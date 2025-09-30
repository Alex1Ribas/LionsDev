const express = require('express');
const ListFlashCards = require('./listFlashCards');
const router = express.Router();

router.get('/', async (req, res) =>{
    const lsCards = await ListFlashCards();
    res.status(200).send(lsCards);
})
///////////////////////////////////////////
router.post('/', async (req, res) => {
    const { pergunta, resposta, baralhoId } = req.body;
    const newFlashCard = await AddFlashCard(baralhoId, pergunta, resposta);
    res.status(201).send({message: "FLashCard Create sucessfully", FlashCard: newFlashCard});
});
///////////////////////////////////////////
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { pergunta, resposta } = req.body;
    const FlashCardAtualizado = await UpdateFlashCard(id, pergunta, resposta);
    res.status(200).send({message: "FlashCard updated sucessfully", FlashCard: FlashCardAtualizado});
});
//////////////////////////////////////////
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await deleteFlashcard(id);
    res.status(200).send({message: "FlashCard deleted sucessfully"});
});

module.exports = router;