import mongoose from "mongoose";
import createError from "../utils/createError.js";

export function ensureValidId(req, _res, next) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return next(createError("ID inválido", 400));
  }
  next();
}
