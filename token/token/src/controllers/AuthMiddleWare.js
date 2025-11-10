const jwt = require('jsonwebtoken');
const Role = {
    USER: 'USER',
    ADMIN: 'ADMIN',
};

async function AuthMiddleWare(...allowedRoles) {
    return (req, res, next) => {
        const authHeader = req.headers.authorization;
        if (!authHeader) return res.status(400).send("Token invalido");

        const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;
        if (!token) {
            return res.status(401).json({ message: 'Token não fornecido' });
        };

        try {
            const secret = process.env.JWT_SECRET;
            if (!secret) {
                return res.status(500).send("Erro de configuração");
            };
            const decoded = jwt.verify(token, secret);
            req.user = decoded;

            const hasPermission = decoded.role?.some((r) => allowedRoles.includes(r));
            if (!hasPermission) {
                return res.status(400).send("Vocẽ não tem permissão para acessar!!")
            };

            next();
        } catch (error) {
            return res.status(500).send("Token invalido");
        };
    };
};