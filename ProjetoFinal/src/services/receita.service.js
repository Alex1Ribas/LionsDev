import receitaRepository from "../repositories/receita.repository.js";
function ensureValidPayload({
  dataEntrada,
  valor,
  metodo,
  pagante,
  descricao,
}) {
  if (!dataEntrada) throw createError("Data de entrada é obrigatória.", 400);
  if (!valor) throw createError("Valor é obrigatório.", 400);
  if (!metodo) throw createError("Método é obrigatório.", 400);
  if (!pagante) throw createError("Pagante é obrigatório.", 400);
  if (!descricao) throw createError("Descrição é obrigatória.", 400);
}

export default {
  async criarReceita(data) {
    ensureValidPayload(data);

    if (data.dataEntrada.length !== 10) {
      throw createError(
        "Data de entrada deve estar no formato dd/mm/aaaa.",
        400
      );
    }
    if (data.valor <= 0) {
      throw createError("O valor da receita deve ser maior que zero.", 400);
    }
    if (data.descricao.length < 20) {
      throw createError("A descrição deve ter no mínimo 20 caracteres.", 400);
    }

    const novaReceita = receitaRepository.create(data);
    return novaReceita;
  },

  async listarReceitas() {
    const receitas = await receitaRepository.findAll();
    if (receitas.length === 0) {
      throw createError("Nenhuma receita encontrada.", 404);
    }
    const receitasOrdenadas = receitas.sort((a, b) =>
      b.dataEntrada.localeCompare(a.dataEntrada)
    );
    return receitasOrdenadas;
  },

  async buscarReceitaPorPagante(pagante) {
    const receitas = await receitaRepository.findByPagante(pagante);
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
    ensureValidPayload(data);

    if (id === undefined || id === null || id !== ObjectID(id).toString()) {
      throw createError("ID da receita é obrigatório para atualização.", 400);
    }

    const receitaAtualizada = await receitaRepository.update(id, data);
    if (!receitaAtualizada) {
      throw createError("Receita não encontrada.", 404);
    }
    return receitaAtualizada;
  },

  async deletarReceita(id) {
    if (id === undefined || id === null || id !== ObjectID(id).toString()) {
      throw createError("ID da receita é obrigatório para exclusão.", 400);
    }

    const receitaDeletada = await receitaRepository.delete(id);
    if (!receitaDeletada) {
      throw createError("Receita não encontrada.", 404);
    }
    if (receitaRepository.findById(id) !== null) {
      throw createError("Erro ao deletar a receita.", 500);
    }

    return receitaDeletada;
  },
};
