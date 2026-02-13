import userRepository from "../repositories/user.repository.js";
import createError from "../utils/createError.js";
import tokenGenerator from "../utils/tokenGenerator.js";
import { hashPassword, compareHash } from "../utils/hashPassword.js";

function ensureValidPayload({ name, email, password, confPassword }) {
  if (!name?.trim()) throw createError("Name is required", 400);
  if (!email?.trim()) throw createError("Email is required.", 400);
  if (!email.includes("@")) throw createError("Invalid email.", 400);
  if (!password) throw createError("Password is required.", 400);
  if (!confPassword)
    throw createError("Password confirmation is required.", 400);
}

export default {
  async createUser(data) {
    ensureValidPayload(data);

    const duplicate = await userRepository.findByEmail(data.email);
    if (duplicate) {
      throw createError("Email already registered", 409);
    }
    if (data.password.length < 8)
      throw createError("Password must be at least 8 characters long!", 400);
    if (data.confPassword !== data.password) {
       throw createError("Passwords do not match!", 400);
    };

    const hashedPassword = await hashPassword(data.password);

    const user = await userRepository.create({
      name: data.name.trim().toLowerCase(),
      email: data.email.trim().toLowerCase(),
      password: hashedPassword,
      role: data.role,
    });

    return { message: "User created successfully!", user, };
  },

  async loginUser(data) {
    if (!data?.email?.trim())
      throw createError("Email cannot be empty!", 400);
    if (!data?.password?.trim())
      throw createError("Password cannot be empty!", 400);

    const userDatabase = await userRepository.findByEmail(data.email);

    if (!userDatabase) {
      throw createError("User not found.", 404);
    }

    const validatePassword = await compareHash(
      data.password,
      userDatabase.password
    );

    if (!validatePassword) {
      throw createError("Invalid password.", 401);
    }

    const token = tokenGenerator(userDatabase);

    return {
      message: "Login successful!",
      token: token,
      id: userDatabase._id,
    };
  },

  async listUser() {
    return userRepository.findAll();
  },

  async searchUser(id) {
    const user = await userRepository.findById(id.id);
    if (!user) {
      throw createError("User not found", 404);
    }
    return user;
  },

  async updateUser(id, data) {
    const payload = { ...data };

    if (payload.email) {
      if (!payload.email.includes("@")) {
        throw createError("Invalid email.", 400);
      }

      const existing = await userRepository.findByEmail(payload.email);
      if (existing && existing.id !== id.id) {
        throw createError("Email already registered", 409);
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
      throw createError("No fields to update", 400);
    }

    const update = await userRepository.updateById(id.id, payload);
    if (!update) throw createError("User not found", 404);
    return { message: "Updated successfully!", update };
  },

  async removeUser(id) {
    const deleteID = await userRepository.deleteById(id.id);
    if (!deleteID) throw createError("User not found", 404);
    return { message: "User deleted successfully!", deleteID };
  },
};
