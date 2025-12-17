import receitaService from "../services/receita.service.js";

export const receitaController = {
  async create(req, res, next) {
    try {
      const user = req.user;
      const result = await receitaService.criarReceita({ ...req.body, user });
      return res.status(201).json(result);
    } catch (err) {
      return next(err);
    }
  },

  async list(req, res, next) {
    try {
      const user = req.user;
      const result = await receitaService.listarReceitas({ user });
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },

  async search(req, res, next) {
    try {
      const user = req.user;
      const result = await receitaService.buscarReceita({
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
      const result = await receitaService.atualizarReceita({
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
      const result = await receitaService.deletarReceita({
        ...req.params,
        user,
      });
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },
};
