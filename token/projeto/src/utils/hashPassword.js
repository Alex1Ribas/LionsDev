import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config()

export async function hashedPassaword(password){
    return await bcrypt.hash(data.password, parseInt(process.env.BCRYPT_SALT_ROUNDS || 10))
}

export async function compareHash(password, hashedPassaword){
    return await bcrypt.compare(password, hashedPassaword);
}