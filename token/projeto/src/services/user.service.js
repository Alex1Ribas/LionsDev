import repositotoy from "../repositories/user.repository";
import createError from "../utils/createError";

//validação do preenchimento do body
function ensureValidPayload({ name, email, password }) {
  if (!name?.trim()) throw createError("Nome é obrigatorio", 400);
  if (!email?.trim()) throw createError("E-mail é obrigatório.", 400);
  if (!email.includes("@")) throw createError("E-mail inválido.", 400);
  if (!password) throw createError("Senha é obrigatória.", 400);
}

//inicio da exportação
export default {
  // funçado de criação do Usuario //
  async ceateUser(data) {
    ensureValidPayload(data); //valida se os dados foram preenchidos

    // verifica duplicidade do email no banco de dados
    const duplicate = await repositotoy.findByEmail(data.email);
    if (duplicate) {
      throw createError("E-mail já cadastrado", 409);
    }

    const hashedPassaword = hashedPassaword(data.password)

    //cria e salva no banco de dados
    return repositotoy.create({
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      password: data.password,
    });
  },

  // função de listar usuarios //
  async listUser() {
    return repositotoy.findAll();
  },

  // funcçao buscar unico usuario //
  async searchUser(id) {
    const user = await repositotoy.findeById(id);
    if (!user) {
      throw createError("Usuario não encontrado", 404);
    }
    return user;
  },

  // função de atualização de ususario //
  async updateUser(id, data) {
    const payload = { ...data }; // recebe as requisições do body ja verificando se não tem informação duplicada informada

    //valida se o email foi preenchido de forma correta incluindo arroba
    if (payload.email) {
      if (!payload.email.includes("@")) {
        throw createError("E-mail inválido.", 400);
      }

      // valida se o email atualizado já nao esta cadastrado
      const existing = await repositotoy.findByEmail(payload.email);
      if (existing && existing.id !== id) {
        throw createError("E-mail já cadastrado", 409);
      }
      payload.email = payload.email.trim().toLowerCase();
    }

    //remove espçaos extras do nome
    if (payload.email) {
      payload.name = payload.name.trim();
    }

    // coloca os dados(payload) em fromato de array por tras dos panos para cosneguir usar o forEach e se ele for indefinido é excluido
    Object.keys(payload).forEach((key) => {
      if (payload[key] === undefined) delete payload[key];
    });

    // verifica se os dados de atualização estão vazios
    if (Object.keys(payload).length === 0) {
      throw createError("Nenhum campo para atualizar", 400);
    }

    // valida se a função conseguiu encontrar o ususario ou solta o erro
    const update = await repositotoy.updateById(id, payload);
    if (!update) throw createError("Usuario não encontrado", 404);
    return update;
  },

  // valida se a função conseguiu encontrar o ususario ou solta o erro
  async removeuser(id) {
    const deleteID = repositotoy.deleteById(id);
    if (!deleteID) throw createError("Usuario não encontrado", 404);
  },
};
