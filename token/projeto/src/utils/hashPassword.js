import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config()

export async function hashPassword(password) {
    return await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT_ROUNDS || 10))
}

export async function compareHash(password, hashePassword) {
    return await bcrypt.compare(password, hashePassword);
  }
  
