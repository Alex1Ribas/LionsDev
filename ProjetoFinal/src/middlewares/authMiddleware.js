import createError from "../utils/createError.js";
import { tokenValidation } from "../utils/tokenGenerator.js";

export function authMiddleware() {
  return (req, _res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return next(createError("Token não informado.", 401));
    }

    const token = authHeader.startsWith("Bearer ")
      ? authHeader.slice(7).trim()
      : authHeader.trim();

    try {
      const payload = tokenValidation(token);
      req.user = payload;
      next();
    } catch (error) {
      next(createError("Token inválido ou expirado.", 401));
    }
  };
}

export function requireRole(...allowedRoles) {
  return (req, _res, next) => {
    const role = req.user?.Role;
    if (!role) {
      return next(createError("Acesso negado.", 403));
    }

    const hasPermission = allowedRoles.includes(role);
    if (!hasPermission) {
      return next(createError("Acesso negado.", 403));
    }

    next();
  };
}
