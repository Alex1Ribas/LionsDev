import User from "./schemauser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import secret from process.env.ACESS_TOKEN_SECRET;

export async function Register(req, res) {

    try {
        const { nome, email, senha, Roule } = req.body

        if (!nome || !email || !senha) {
            return res.status(401).json({ message: "Body não foi preenchido corretamente!" });
        };

        const hashSenha = bcrypt.hash(senha, 10)

        const novoUsuario = await User.create({
            nome,
            email,
            senha: hashSenha,
            Roule
        });

        const payload = {
            userId: novoUsuario._id,
            email: novoUsuario.email,
            Roule: novoUsuario.Roule
        };

        const token = jwt.sign(payload, secret, { expiresIn: "7d" });
        return res.status(201).json({
            message: "Usuario criado com sucesso!",
            usuario: novoUsuario, token: token
        });

    } catch (error) {
        console.error("Erro na criação do usuario ou na geração do token", error.message);
        throw error;
    };
};