import despesaService from "../services/despesa.service.js";

export const despesaController = {
  async create(req, res, next) {
    try {
      const result = await despesaService.criardespesa(req.body);
      return res.status(201).json(result);
    } catch (err) {
      return next(err);
    }
  },

  async list(req, res, next) {
    try {
      const result = await despesaService.listardespesas();
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },

  async search(req, res, next) {
    try {
      const result = await despesaService.buscardespesaPordestinatario(req.params);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },

  async update(req, res, next) {
    try {
      const result = await despesaService.atualizardespesa(req.params, req.body);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },

  async remove(req, res, next) {
    try {
      const result = await despesaService.deletardespesa(req.params);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },
};