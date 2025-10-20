const express = require('express')
const router = express.Router()

const addProduct = require('../controller/addProduct')
const listProduct = require('../controller/listProduct')
const updateProduct = require('../controller/updateProduct')
const deleteProduct = require('../controller/deleteProduct')

router.post('/', addProduct);
router.get('/', listProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router