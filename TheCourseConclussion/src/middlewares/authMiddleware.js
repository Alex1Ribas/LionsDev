import createError from "../utils/createError.js";
import { tokenValidation } from "../utils/tokenGenerator.js";

export function authMiddleware(req, _res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return next(createError("Token not provided.", 401));
  }

  const token = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7).trim()
    : authHeader.trim();

  try {
    const payload = tokenValidation(token);
    req.user = payload;
    next();
  } catch {
    next(createError("Invalid or expired token.", 401));
  }
}

export function requireRole(...allowedRoles) {
  return (req, _res, next) => {
    const role = req.user?.role
    
    if (!role) {
      return next(createError("Access denied.", 403));
    }

    const hasPermission = allowedRoles.includes(role);
    if (!hasPermission) {
      return next(createError("Access denied.", 403));
    }

    next();
  };
}
