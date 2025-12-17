import { parse } from "date-fns";
import relatorioRepository from "../repositories/relatorio.repository.js";
import createError from "../utils/createError.js";

const validarRelatorio = (user, tipo, periodoInicio, periodoFim) => {
  if (!user) throw createError("Usuário é obrigatório", 400);
  if (!tipo)
    throw createError("Deve ser escolhido um tipo: receita/despesa", 400);
  if (!periodoInicio) throw createError("Período de início é obrigatório", 400);
  if (!periodoFim) throw createError("Período de fim é obrigatório", 400);
};

export default {
  async criarRelatorio(data) {
    validarRelatorio(data);
    if (
      !isValid(
        parse(data.periodoInicio || data.periodoFim, "dd/MM/yyyy", new Date())
      )
    ) {
      throw createError("formato das datas deve ser: dd/mm/yyyy", 400);
    }
    if (data.periodoInicio >= data.periodoFim)
      throw createError(
        "Período de início deve ser anterior ao período de fim",
        400
      );

    return await relatorioRepository.create(data);
  },

  async listarRelatorio() {
    return await relatorioRepository.findAll();
  },

  async buscarRelatorio(id) {
    if (!id) throw createError("ID é obrigatório", 400);
    return await relatorioRepository.findById(id);
  },

  async atualizarRelatorio(id, dados) {
    if (!id) throw createError("ID é obrigatório", 400);
    validarRelatorio(dados);
    return await relatorioRepository.updateById(id, dados);
  },

  async deletarRelatorio(id) {
    if (!id) throw createError("ID é obrigatório", 400);
    return await relatorioRepository.deleteById(id);
  },
};
