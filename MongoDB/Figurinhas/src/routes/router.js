const express = require('express');
const router = express.Router();
const Figurinha = require('../data/SchemaFigurinha')

///////////////////////////////////// Post

router.post('/Adicionar', async (req, res) => {
    try{
    const {numero, tema} = req.body;
    const newFigurinha = await Add( numero, tema);
    res.status(201);
    res.json({message: 'Figurinha criada com sucesso!', figurinha: newFigurinha});
    } catch (error){
        console.error('Erro ao adicionar figurinha:', error);
        res.status(500).json({message: 'Erro ao adicionar figurinha'});
    }
});
/////////////////////////////////////// Get
 router.get('/Listar', async (req, res) => {
    try{
        const figurinhas = await List();
        res.status(200).json(figurinhas);
    } catch (error){
        console.error('Erro ao listar figurinhas:', error);
        res.status(500).json({message: 'Erro ao listar figurinhas'});
    }
 });
/////////////////////////////////////// Put
    router.put('/Atualizar/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { numero, tema } = req.body;
        const updatedFigurinha = await update(id, numero, tema);
        if (updatedFigurinha) {
            res.status(200).json({ message: 'Figurinha atualizada com sucesso!', figurinha: updatedFigurinha });
        } else {
            res.status(404).json({ message: 'Figurinha não encontrada' });
        }
    } catch (error) {
        console.error('Erro ao atualizar figurinha:', error);
        res.status(500).json({ message: 'Erro ao atualizar figurinha' });
    }
});
/////////////////////////////////////// Delete
router.delete('/Deletar/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const remove = await remove(id);
        if (remove) {
            res.status(200).json({ message: 'Figurinha removida com sucesso!', figurinha: remove });
        } else {
            res.status(404).json({ message: 'Figurinha não encontrada' });
        }
    } catch (error) {
        console.error('Erro ao remover figurinha:', error);
        res.status(500).json({ message: 'Erro ao remover figurinha' });
    }
});
/////////////////////////////////////// Get Search
router.get('/Buscar', async (req, res) => {
    try {
        const { numero, tema } = req.query;
        const foundFigurinhas = await serach(numero, tema);
        res.status(200).json(foundFigurinhas);
    } catch (error) {
        console.error('Erro ao buscar figurinhas:', error);
        res.status(500).json({ message: 'Erro ao buscar figurinhas' });
    }
});


module.exports = router;