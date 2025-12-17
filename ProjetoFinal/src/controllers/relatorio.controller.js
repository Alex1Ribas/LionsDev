import relatorioService from "../services/relatorio.service.js";

export const relatorioController = {
  async create(req, res, next) {
    try {
      const user = req.user;
      const result = await relatorioService.criarRelatorio({
        ...req.body,
        user,
      });
      return res.status(201).json(result);
    } catch (err) {
      return next(err);
    }
  },

  async list(req, res, next) {
    try {
      const user = req.user;
      const result = await relatorioService.listarRelatorio({ user });
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },

  async search(req, res, next) {
    try {
      const result = await relatorioService.buscarRelatorio({
        ...req.params,
        user,
      });
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },

  async update(req, res, next) {
    try {
      const user = req.user;
      const result = await relatorioService.atualizarRelatorio({
        ...req.params,
        ...req.body,
        user,
      });
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },

  async remove(req, res, next) {
    try {
      const user = req.user;
      const result = await relatorioService.deletarRelatorio({
        ...req.params,
        user,
      });
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },
};
