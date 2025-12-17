import receitaRepository from "../repositories/receita.repository.js";
import { parse, isValid } from "date-fns";
import createError from "../utils/createError.js";

function ensureValidPayload({
  user,
  dataEntrada,
  valor,
  metodo,
  pagante,
  descricao,
}) {
  if (!user) throw createError("Usuario nao identificado!", 401);
  if (!dataEntrada) throw createError("Data de entrada é obrigatória.", 400);
  if (!valor) throw createError("Valor é obrigatório.", 400);
  if (!metodo) throw createError("Método é obrigatório.", 400);
  if (!pagante) throw createError("Pagante é obrigatório.", 400);
  if (!descricao) throw createError("Descrição é obrigatória.", 400);
}

export default {
  async criarReceita(data, user) {
    ensureValidPayload(data);

    try {
      if (!isValid(parse(data.dataEntrada, "dd/MM/yyyy", new Date()))) {
        throw createError(
          "Data de entrada deve estar no formato dd/mm/aaaa.",
          400
        );
      }
      if (data.valor <= 0) {
        throw createError("O valor da receita deve ser maior que zero.", 400);
      }
      if (!parseFloat(data.valor)) {
        throw createError("o valor deve ser um numero!", 400);
      }
      if (data.descricao.length < 10) {
        throw createError("A descrição deve ter no mínimo 10 caracteres.", 400);
      }

      const novaReceita = receitaRepository.create(data, user);
      return novaReceita;
    } catch (err) {
      throw createError("falha ao criar receita");
    }
  },

  async listarReceitas(user) {
    const receitas = await receitaRepository.findAll(user);
    if (receitas.length === 0) {
      throw createError("Nenhuma receita encontrada.", 404);
    }
    return receitas;
  },

  async buscarReceita(id) {
    const receitas = await receitaRepository.findById(id.id);
    if (receitas.length === 0) {
      throw createError(
        "Nenhuma receita encontrada para o pagante informado.",
        404
      );
    }
    return receitas;
  },

  //TODO: implementar novos metodos de busca

  async atualizarReceita(id, data) {
    //TODO: adicionar validação dos daddos de alteração

    if (id === undefined || id === null) {
      throw createError("ID da receita é obrigatório para atualização.", 400);
    }

    const receitaAtualizada = await receitaRepository.updateById(id.id, data);
    if (!receitaAtualizada) {
      throw createError("Receita não encontrada.", 404);
    }
    return receitaAtualizada;
  },

  async deletarReceita(id) {
    if (id === undefined || id === null) {
      throw createError("ID da receita é obrigatório para exclusão.", 400);
    }

    const receitaDeletada = await receitaRepository.deleteById(id.id);
    if (!receitaDeletada) {
      throw createError("Receita não encontrada.", 404);
    }

    return receitaDeletada;
  },
};
