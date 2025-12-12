import relatorioService from "../services/relatorio.service.js";


export const relatorioController = {

  async create(req, res, next) {
    try {
      const result = await relatorioService.criarRelatorio(req.body);
      return res.status(201).json(result);
    } catch (err) {
      return next(err);
    }
  },

  async list(req, res, next) {
    try {
      const result = await relatorioService.listarRelatorio();
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },

  async search(req, res, next) {
    try {
      const result = await relatorioService.buscarRelatorio(req.params);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },

  async update(req, res, next) {
    try {
      const result = await relatorioService.atualizarRelatorio(req.params, req.body);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },

  async remove(req, res, next) {
    try {
      const result = await relatorioService.deletarRelatorio(req.params);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },
};