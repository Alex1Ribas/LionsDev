const express = require('express');
const router = express.Router();

const { Register } = require('../controllers/Register');
const { Login } = require('../controllers/Login');
const { middleWare } = require('../controllers/middleWare');
const { Perfil } = require('../controllers/perfil');

router.post('/Register', Register);
router.post('/Login', Login)
router.get('/Perfil', middleWare, Perfil) 

module.exports = router;