const express = require('express');
const router = express.Router();

const listFlashCards = require('./listFlashCards');
const listFlashCardsPorBaralho = require('./listFlashCardsPorBaralho');
const updateFlashCards = require('./updateFlashCards');
const deleteFlashcard = require('./deleteFlashCard');
const AddFlashCards = require('./AddFlashcards');

//////////////////////////////////////////GET
router.get('/', async (req, res) =>{
    const lsCards = await listFlashCards();
    res.status(200).send(lsCards);
});
//////////////////////////////////////////GET POR BARALHO
router.get('/:ID', async (req, res) =>{
    const {id} = req.params;
    const lsCards = await listFlashCardsPorBaralho(id);
    res.status(200).send(lsCards);
});
//////////////////////////////////////////POST
router.post('/', async (req, res) => {
    const { pergunta, resposta, BaralhoId } = req.body;
    const newFlashCard = await AddFlashCards(BaralhoId, pergunta, resposta);
    res.status(201).send({message: "FLashCard Create sucessfully", FlashCard: newFlashCard});
});
//////////////////////////////////////////PUT
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { pergunta, resposta } = req.body;
    const FlashCardAtualizado = await updateFlashCards(id, pergunta, resposta);
    res.status(200).send({message: "FlashCard updated sucessfully", FlashCard: FlashCardAtualizado});
});
//////////////////////////////////////////DELETE
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await deleteFlashcard(id);
    res.status(200).send({message: "FlashCard deleted sucessfully"});
});

module.exports = router;