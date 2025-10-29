import User from "./schemauser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function Login(req, res) {
    try {
        const { email, senha } = req.body;
        if (!email || !senha) {
            return res.status(400).json({
                message: "Os campos não foram preenchidos corretamente!"
            });
        };
            
            const user = await User.findOne({email});
            const hashSenha = await bcrypt.compare(senha, user.senha)
            const secret = process.env_ACESS_SECRET
            const token = jwt.sign({id: user._id, email: user.email, Roule: user.Roule})

    } catch (error) {
        console.error("erro nos dados do login", error.message);
        throw error;
    };
};
