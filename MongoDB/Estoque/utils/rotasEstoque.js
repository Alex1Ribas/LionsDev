const express = require('express');
const Produto = require('./SchemaProdutos');
const Movimentacao = require('./SchemaMovimentação');
const SaidaProduto = require('./Saida');
const Entrada = require('./Entrada');
const AddProduto = require('./AddProduto');
const router = express.Router();
////////////////////////////////////////// Adicionar produto
router.post('/Adicionar', async (req, res) => {
    const { Nome,Quantidade } = req.body;
    const newEntrada = await AddProduto(Nome, Quantidade);
    res.status(201).send({message: "Produto criado com sucesso", Produto: newEntrada});
});

////////////////////////////////////////// Adicionar entrada

router.post('/entrada', async (req, res) => {
        const { ProdutoId, Quantidade } = req.body
        const newEntrada = await Entrada(ProdutoId, Quantidade);
        if (!newEntrada) {
            res.status(400).send({ message: "Erro ao realizar entrada" });
        }else{
        res.status(200).send({ message: "Entrada realizada com sucesso", produto: newEntrada });
        }
    });

////////////////////////////////////////// Adicionar saida

router.post('/saida/:ProdutoId', async (req, res) => {
    try{
        const {ProdutoId} = req.params;
        const {Quantidade} = req.body;
        const prod = await Produto.findById(ProdutoId);
        const newSaida = await SaidaProduto(prod, Quantidade);
        res.status(200).send({message: "Saida realizada com sucesso", produto: newSaida});
    } catch (error){
        res.status(500).send({message: "Erro ao realizar saída", error: error.message});
}});

////////////////////////////////////////// Historico
router.get('/historico/:ProdutoId', async (req, res) => {
    try{
        const { ProdutoId } = req.params;
        const historico = await Movimentacao.find({ ProdutoId: ProdutoId })
        res.status(200).send(historico);
    } catch (error){
        res.status(500).send({message: "Erro ao buscar histórico", error: error.message});
    }});

    module.exports = router;