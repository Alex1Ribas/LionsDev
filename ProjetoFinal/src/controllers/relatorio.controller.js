import relatorioService from "../services/relatorio.service.js";

export const relatorioController = {
  async create(req, res, next) {
   try {
      const { tipo, periodoInicio, periodoFim } = req.body;
      const user = req.user

      const result = await relatorioService.create({
        user, tipo, periodoInicio, periodoFim
      });
      return res.status(201).json(result);
    } catch (err) {
      return next(err);
    }
  },
};