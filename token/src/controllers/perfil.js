async function Perfil(req, res) {
    try {
        const user = req.user; // Obtém os dados do usuário do middleware de autenticação

        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado." });
        }

        // Retorna os dados do perfil do usuário, excluindo informações sensíveis
        const perfil = {
            id: user.id,
            nome: user.nome,
            email: user.email,
            // Adicione outros campos relevantes do perfil, se necessário
        };

        return res.status(200).json({ perfil });
    } catch (error) {
        console.error("Erro ao obter o perfil do usuário:", error.message);
        return res.status(500).json({ message: "Erro interno no servidor." });
    }
}

module.exports = { Perfil };