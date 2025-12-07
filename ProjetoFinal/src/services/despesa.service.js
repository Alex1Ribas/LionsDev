import despesaRepository from "../repositories/despesa.repository.js";
import createError from "../utils/createError.js";

const ensureValidPayload = (
  dataSaida,
  valor,
  metodo,
  destinatario,
  descricao
) => {
  if (!dataSaida) throw createError("Data de saida é obrigatória.", 400);
  if (!valor) throw createError("Valor é obrigatório.", 400);
  if (!metodo) throw createError("Método é obrigatório.", 400);
  if (!destinatario) throw createError("destinatario é obrigatório.", 400);
  if (!descricao) throw createError("Descrição é obrigatória.", 400);
};

export default {
  async criardespesa(data) {
    ensureValidPayload(data);

    if (data.dataSaida.length !== 10) {
      throw createError("Data de saida deve estar no formato dd/mm/aaaa.", 400);
    }
    if (data.valor <= 0) {
      throw createError("O valor da despesa deve ser maior que zero.", 400);
    }
    if (data.descricao.length < 20) {
      throw createError("A descrição deve ter no mínimo 20 caracteres.", 400);
    }

    const novadespesa = despesaRepository.create(data);
    return novadespesa;
  },

  async listardespesas() {
    const despesas = await despesaRepository.findAll();
    if (despesas.length === 0) {
      throw createError("Nenhuma despesa encontrada.", 404);
    }
    const despesasOrdenadas = despesas.sort((a, b) =>
      b.dataSaida.localeCompare(a.dataSaida)
    );
    return despesasOrdenadas;
  },

  async buscardespesaPordestinatario(destinatario) {
    const despesas = await despesaRepository.findBydestinatario(destinatario);
    if (despesas.length === 0) {
      throw createError(
        "Nenhuma despesa encontrada para o destinatario informado.",
        404
      );
    }
    return despesas;
  },

  //TODO: implementar novos metodos de busca

  async atualizardespesa(id, data) {
    ensureValidPayload(data);

    if (id === undefined || id === null || id !== ObjectID(id).toString()) {
      throw createError("ID da despesa é obrigatório para atualização.", 400);
    }

    const despesaAtualizada = await despesaRepository.update(id, data);
    if (!despesaAtualizada) {
      throw createError("despesa não encontrada.", 404);
    }
    return despesaAtualizada;
  },

  async deletardespesa(id) {
    if (id === undefined || id === null || id !== ObjectID(id).toString()) {
      throw createError("ID da despesa é obrigatório para exclusão.", 400);
    }

    const despesaDeletada = await despesaRepository.delete(id);
    if (!despesaDeletada) {
      throw createError("despesa não encontrada.", 404);
    }
    if (despesaRepository.findById(id) !== null) {
      throw createError("Erro ao deletar a despesa.", 500);
    }

    return despesaDeletada;
  },
};
