import mongoose from "mongoose";
import createError from "../../utils/createErro";

export function ensureValidId(req, res, next) {
  if (!mongoose.Types.objectId.IsValid(req.params.id)) {
    throw createError("ID invalido", 400);
  } 
  next();
}
