const express = require('express');
const router = express.Router();

const { Register } = require('../controllers/Register');
const { Login } = require('../controllers/Login');
const { AuthMiddleWare } = require('../controllers/AuthMiddleWare');
const { Perfil } = require('../controllers/perfil');

router.post('/Register', Register);
router.post('/Login', Login)
router.get('/Perfil', AuthMiddleWare, Perfil) 

module.exports = router;