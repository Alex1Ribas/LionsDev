const express = require('express');
const router = express.Router();

const { Register } = require('../controllers/Register');
const { Login } = require('../controllers/Login');
const { authMiddleware } = require('../controllers/authMiddleware');
const { profile } = require('../controllers/profile');

// Authentication Routes
router.post('/register', Register);
router.post('/login', Login);

// Protected Routes
router.get('/profile', authMiddleware(), profile);

module.exports = router;
