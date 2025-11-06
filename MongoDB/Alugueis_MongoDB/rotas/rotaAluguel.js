const express = require('express');
const router = express.Router();

const listAlugueis = require('../aluguel/listAlugueis');
const addAluguel = require('../aluguel/addAluguel');
const updateAlugueis = require('../aluguel/updateAlugueis');
const deleteAlugueis = require('../aluguel/deleteAlugueis');
const buscarAlugueis = require('../aluguel/buscarAlugueis');
const addDevoluacao = require('../aluguel/addDevolução');

//////////////////////////////////// ROTA DE ADIÇÃO DO ALUGUEL
router.post('/', async(req, res) =>{
    try{
        const data = req.body({idEstudante, idLivro, dataLocacao, dataDevolucao});
        const aluguel = await addAluguel(data);
        return aluguel
    } catch(error){
        console.error("Erro ao executar a função", error.menssage);
        throw error        
    };
});

//////////////////////////////////// ROTA DE LISTAGEM DOS ALUGUEIS
router.get('/', async(req, res) =>{
    try{
      const list = await listAlugueis();
      return res.status(200).json({
        message: "listagem dos alugeis:",
        alugueis: list})
    } catch(error){
        console.error("Erro na execução da função", error.message)
        throw error
    }
});

//////////////////////////////////// ROTA DE ATUALIZAÇÃO DO ALUGUEL
router.put('/:id', updateAlugueis );


//////////////////////////////////// ROTA DE REMOCÇÃO DO ALUGUEL
router.delete('/:id', deleteAlugueis);


//////////////////////////////////// ROTA DE ADIÇÃO DE DEVOLUÇÃO
router.post('/:id', addDevoluacao);


//////////////////////////////////// ROTA DE BUSCA DE UM ALUGEUEL
router.get('/:id', buscarAlugueis)

module.exports = router;