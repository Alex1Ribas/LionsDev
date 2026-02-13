const jwt = require('jsonwebtoken');

const Role = {
    USER: 'USER',
    ADMIN: 'ADMIN',
};

function authMiddleware(...allowedRoles) {
    return (req, res, next) => {
        const authHeader = req.headers.authorization;
        if (!authHeader) return res.status(401).send("Token not provided");

        const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;
        
        try {
            const secret = process.env.ACCESS_TOKEN_SECRET;
            if (!secret) {
                return res.status(500).send("Server configuration error");
            }
            
            const decoded = jwt.verify(token, secret);
            req.user = decoded;

            if (allowedRoles.length > 0) {
                const userRole = decoded.role;
                const hasPermission = allowedRoles.includes(userRole);
                
                if (!hasPermission) {
                    return res.status(403).send("You do not have permission to access this resource!");
                }
            }

            next();
        } catch (error) {
            return res.status(401).send("Invalid or expired token");
        }
    };
}

module.exports = { authMiddleware, Role };
