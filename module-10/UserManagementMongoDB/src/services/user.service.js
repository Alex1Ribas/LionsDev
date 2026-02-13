import repository from "../repositories/user.repository.js";
import createError from "../utils/createError.js";
import tokenGenerator from "../utils/tokenGenerator.js";
import {hashPassword, compareHash} from "../utils/hashPassword.js"

function ensureValidPayload({ name, email, password }) {
  if (!name?.trim()) throw createError("Name is required", 400);
  if (!email?.trim()) throw createError("E-mail is required.", 400);
  if (!email.includes("@")) throw createError("Invalid E-mail format.", 400);
  if (!password) throw createError("Password is required.", 400);
}

export default {
  async createUser(data) {
    ensureValidPayload(data);

    const duplicate = await repository.findByEmail(data.email);
    if (duplicate) {
      throw createError("E-mail already registered", 409);
    }

    const hashedPassword = await hashPassword(data.password);

    const user = await repository.create({
      name: data.name.trim().toLowerCase(),
      email: data.email.trim().toLowerCase(),
      password: hashedPassword,
      role: data.role || "USER",
    });

    const token = tokenGenerator(user);

    return { user, token };
  },

  async loginUser(data) {
    if (!data?.email?.trim()) throw createError("Email cannot be empty!", 400);
    if (!data?.password?.trim()) throw createError("Password cannot be empty!", 400);

    const userDatabase = await repository.findByEmail(data.email);    

    if (!userDatabase) {
      throw createError("User not found.", 404);
    }

    const validatePassword = await compareHash(data.password, userDatabase.password);

    if (!validatePassword) {
      throw createError("Invalid password.", 401);
    }

    const token = tokenGenerator(userDatabase);    

    return { message: "Login successful!", token: token, id: userDatabase._id};
  },

  async listUser() {
    return repository.findAll();
  },

  async searchUser(id) {    
    const user = await repository.findById(id.id);
    if (!user) {
      throw createError("User not found", 404);
    }
    return user;
  },

  async updateUser(id, data) {
    const payload = { ...data }; 

    if (payload.email) {
      if (!payload.email.includes("@")) {
        throw createError("Invalid email format.", 400);
      }

      const existing = await repository.findByEmail(payload.email);
      if (existing && existing.id !== id.id) {
        throw createError("Email already in use", 409);
      }
      payload.email = payload.email.trim().toLowerCase();
    }

    if (payload.name) {
      payload.name = payload.name.trim();
    }
    
    
    Object.keys(payload).forEach((key) => {
      if (payload[key] === undefined) delete payload[key];
    });
    
    if (Object.keys(payload).length === 0) {
      throw createError("No fields provided for update", 400);
    }

    const update = await repository.updateById(id.id, payload);
    if (!update) throw createError("User not found", 404);
    return {message: "Updated successfully!", update};
  },

  async removeUser(id) {
    const deleteUser = await repository.deleteById(id.id);
    if (!deleteUser) throw createError("User not found", 404);
    return {message: "User deleted successfully!", deleteUser}
  },
};


