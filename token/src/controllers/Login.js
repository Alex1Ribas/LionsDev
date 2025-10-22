const User = require('../data/schemaUser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function Login(req, res) {
    try {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ message: "Os campos 'email' e 'senha' são obrigatórios." });
        };// Valida se os dados foram preenchidos

        const usuarioEncontrado = await User.findOne({ email });
        const validarSenha = await bcrypt.compare(senha, emailEncontrado.senha);
        if (!usuarioEncontrado || !validarSenha) {
            return res.status(401).send({ message: "E-mail ou senha invalido não encontrado!" });
        };

        const token = jwt.sign({id: usuarioEncontrado._id, email: usuarioEncontrado.email}, process.env.ACESS_TOKEN_SECRET, { expiresIn: '7d' });
        return res.status(200).send({ message: "Login efetuado com sucesso!", token: token });

    } catch (error) {
        console.error("Erro ao efetuar login!", error.message);
        return res.status(500).send({ message: "Erro interno no servidor" });
    }
}

module.exports = Login;
