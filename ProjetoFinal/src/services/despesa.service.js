import despesaRepository from "../repositories/despesa.repository.js";
import { parse, isValid } from "date-fns";
import createError from "../utils/createError.js";

function ensureValidPayload({
  user,
  dataSaida,
  valor,
  metodo,
  destinatario,
  descricao,
}) {
  if (!user) throw createError("Usuario nao identificado!", 401);
  if (!dataSaida) throw createError("Data de saida é obrigatória.", 400);
  if (!valor) throw createError("Valor é obrigatório.", 400);
  if (!metodo) throw createError("Método é obrigatório.", 400);
  if (!destinatario) throw createError("destinatario é obrigatório.", 400);
  if (!descricao) throw createError("Descrição é obrigatória.", 400);
}

export default {
  async criarDespesa(data, user) {
    ensureValidPayload(data);

    try{

    if (!isValid(parse(data.dataSaida, "dd/MM/yyyy", new Date()))) {
      throw createError("Data de saida deve estar no formato dd/mm/aaaa.", 400);
    }
    if (data.valor <= 0) {
      throw createError("O valor da despesa deve ser maior que zero.", 400);
    }
    if (!parseFloat(data.valor)) {
      throw createError("o valor deve ser um numero!", 400);
    }
    if (data.descricao.length < 10) {
      throw createError("A descrição deve ter no mínimo 10 caracteres.", 400);
    }

    const novaDespesa = despesaRepository.create(data, user);
    return novaDespesa;
  } catch(err){
    throw createError("Falha ao criar despesa")
  }
  },

  async listarDespesas(user) {
    const despesas = await despesaRepository.findAll(user);
    if (despesas.length === 0) {
      throw createError("Nenhuma despesa encontrada.", 404);
    }
    return despesas;
  },

  async buscarDespesa(id) {
    const despesas = await despesaRepository.findById(id.id);
    if (despesas.length === 0) {
      throw createError(
        "Nenhuma despesa encontrada para o destinatario informado.",
        404
      );
    }
    return despesas;
  },

  //TODO: implementar novos metodos de busca

  async atualizarDespesa(id, data) {
    //TODO: adicionar validação dos daddos de alteração

    if (id === undefined || id === null) {
      throw createError("ID da despesa é obrigatório para atualização.", 400);
    }

    const despesaAtualizada = await despesaRepository.updateById(id.id, data);
    if (!despesaAtualizada) {
      throw createError("despesa não encontrada.", 404);
    }
    return despesaAtualizada;
  },

  async deletarDespesa(id) {
    if (id === undefined || id === null) {
      throw createError("ID da despesa é obrigatório para exclusão.", 400);
    }

    const despesaDeletada = await despesaRepository.deleteById(id.id);
    if (!despesaDeletada) {
      throw createError("despesa não encontrada.", 404);
    }

    return despesaDeletada;
  },
};
