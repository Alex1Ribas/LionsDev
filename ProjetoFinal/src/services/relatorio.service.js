import {
  parse,
  isValid,
  isAfter,
  isWithinInterval,
  startOfDay,
  endOfDay,
} from "date-fns";
import receitaRepository from "../repositories/receita.repository.js";
import despesaRepository from "../repositories/despesa.repository.js";
import createError from "../utils/createError.js";

export default {
  async create(data) {
    const { user, tipo, periodoInicio, periodoFim } = data;

    if (!tipo || !periodoInicio || !periodoFim) {
      throw createError("Tipo e períodos são obrigatórios", 400);
    }

    const dataInicio = startOfDay(
      parse(periodoInicio, "dd/MM/yyyy", new Date())
    );
    const dataFim = endOfDay(parse(periodoFim, "dd/MM/yyyy", new Date()));

    if (!isValid(dataInicio) || !isValid(dataFim)) {
      throw createError("Formato de data inválido. Use dia/mês/ano", 400);
    }

    if (isAfter(dataInicio, dataFim)) {
      throw createError(
        "A data de início não pode ser depois da data de fim",
        400
      );
    }

    const tipoRelatorio = tipo.toLowerCase();

    const resultadoFinal = {};

    if (tipoRelatorio === "receita" || tipoRelatorio === "lucro") {
      const receitasDoBanco = await receitaRepository.findByUser(user);
      const somaReceita = receitasDoBanco.reduce((acumulado, registro) => {
        if (!registro.dataEntrada || typeof registro.dataEntrada !== 'string') return acumulado;
        const dataDoRegistro = parse(
          registro.dataEntrada,
          "dd/MM/yyyy",
          new Date()
        );
        return isWithinInterval(dataDoRegistro, {
          start: dataInicio,
          end: dataFim,
        })
          ? acumulado + (registro.valor || 0)
          : acumulado;
      }, 0);

      resultadoFinal.totalReceita = somaReceita;
    }

    if (tipoRelatorio === "despesa" || tipoRelatorio === "lucro") {
      const despesasDoBanco = await despesaRepository.findByUser(user);
      const somaDespesa = despesasDoBanco.reduce((acumulado, registro) => {
        if (!registro.dataSaida || typeof registro.dataSaida !== "string")
          return acumulado;
        const dataDoRegistro = parse(
          registro.dataSaida,
          "dd/MM/yyyy",
          new Date()
        );
        return isWithinInterval(dataDoRegistro, {
          start: dataInicio,
          end: dataFim,
        })
          ? acumulado + (registro.valor || 0)
          : acumulado;
      }, 0);

      resultadoFinal.totalDespesa = somaDespesa;
    }

    if (tipoRelatorio === "lucro") {
      resultadoFinal.lucroLiquido =
        (resultadoFinal.totalReceita || 0) - (resultadoFinal.totalDespesa || 0);
    }

    return resultadoFinal;
  },
};
