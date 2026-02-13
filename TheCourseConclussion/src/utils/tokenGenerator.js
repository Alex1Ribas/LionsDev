import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import createError from "./createError.js";

dotenv.config();

export default function tokenGenerator(data) {
  const payload = {
    _id: data._id,
    email: data.email,
    role: data.role
  };

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
}

export function tokenValidation(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    throw createError("Invalid or expired token.", 401);
  }
}
