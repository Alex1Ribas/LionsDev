import despesaService from "../services/despesa.service.js";

export const despesaController = {

  async create(req, res, next) {
    try {
      const result = await despesaService.criarDespesa(req.body);
      return res.status(201).json(result);
    } catch (err) {
      return next(err);
    }
  },

  async list(req, res, next) {
    try {
      const result = await despesaService.listarDespesas();
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },

  async search(req, res, next) {
    try {
      const result = await despesaService.buscarDespesa(req.params);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },

  async update(req, res, next) {
    try {
      const result = await despesaService.atualizarDespesa(req.params, req.body);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },

  async remove(req, res, next) {
    try {
      const result = await despesaService.deletarDespesa(req.params);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },
};