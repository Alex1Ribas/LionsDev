import repositoryUser from "../repositories/user.repository.js";
import createError from "../utils/createError.js";
import tokenGenerator from "../utils/tokenGenerator.js";
import { hashPassword, compareHash } from "../utils/hashPassword.js";

function ensureValidPayload({ name, email, password, confPassword }) {
  if (!name?.trim()) throw createError("Nome é obrigatorio", 400);
  if (!email?.trim()) throw createError("E-mail é obrigatório.", 400);
  if (!email.includes("@")) throw createError("E-mail inválido.", 400);
  if (!password) throw createError("Senha é obrigatória.", 400);
  if (!confPassword)
    throw createError("A confirmação de senha é obrigatória.", 400);
}

export default {
  async createUser(data) {
    ensureValidPayload(data);

    const duplicate = await repositoryUser.findByEmail(data.email);
    if (duplicate) {
      throw createError("E-mail já cadastrado", 409);
    }
    if (data.password.length < 8)
      throw createError("A senha precisa ter pelo menos 8 caracteres!", 400);
    if (data.confPassword !== data.password) {"As senhas não conhecidem!", 400};

    const hashedPassword = await hashPassword(data.password);

    const user = await repositoryUser.create({
      name: data.name.trim().toLowerCase(),
      email: data.email.trim().toLowerCase(),
      password: hashedPassword,
      Role: data.Role,
    });

    const token = tokenGenerator(user);

    return { message: "Usuário criado com sucesso!", user, token };
  },

  async loginUser(data) {
    if (!data?.email?.trim())
      throw createError("Email não pode permanecer vazio!", 400);
    if (!data?.password?.trim())
      throw createError("Senha não pode permanecer vazia!", 400);

    const userDatabase = await repositoryUser.findByEmail(data.email);

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
      message: "Login efetuado com sucesso!",
      token: token,
      id: userDatabase._id,
    };
  },

  async listUser() {
    return repositoryUser.findAll();
  },

  async searchUser(id) {
    const user = await repositoryUser.findById(id.id);
    if (!user) {
      throw createError("Usuario não encontrado", 404);
    }
    return user;
  },

  async updateUser(id, data) {
    const payload = { ...data };

    if (payload.email) {
      if (!payload.email.includes("@")) {
        throw createError("E-mail inválido.", 400);
      }

      const existing = await repositoryUser.findByEmail(payload.email);
      if (existing && existing.id !== id.id) {
        throw createError("E-mail já cadastrado", 409);
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
      throw createError("Nenhum campo para atualizar", 400);
    }

    const update = await repositoryUser.updateById(id.id, payload);
    if (!update) throw createError("Usuario não encontrado", 404);
    return { message: "Atualizado com sucesso!", update };
  },

  async removeuser(id) {
    const deleteID = await repositoryUser.deleteById(id.id);
    if (!deleteID) throw createError("Usuario não encontrado", 404);
    return { message: "Usuario deletado com sucesso!", deleteID };
  },
};
