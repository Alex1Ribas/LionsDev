const User = require('../data/schemaUser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function Register(req, res) {
    try {
        const { nome, email, senha } = req.body;// Pega os dados do corpo da requisição

        if (!nome || !email || !senha) {
            return res.status(400).send({ message: "Os Campos: nome, email e senha são obrigatorios" })// Verifica se os campos estão preenchidos
        };

        const hashSenha = await bcrypt.hash(senha, 10); // Criptografa a senha

        const novoUsuario = await User.create({ nome, email, senha: hashSenha });// Cria o novo usuario no banco de dados

        const token = jwt.sign(novoUsuario, process.env.ACESS_TOKEN_SECRET) // Gera um token JWT para o novo usuario
        return res.status(201).json({ message: "usuario criado com sucesso", newUSer: newUSer, token: token });

    } catch (error) {
        console.error('Erro ao criar usuario', error.message);
        throw error;
    };
};

module.exports = { Register };
