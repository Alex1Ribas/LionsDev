import incomeService from "../services/income.service.js";

export const incomeController = {
  async create(req, res, next) {
    try {
      const user = req.user;
      const result = await incomeService.createIncome({ ...req.body, user });
      return res.status(201).json(result);
    } catch (err) {
      return next(err);
    }
  },

  async list(req, res, next) {
    try {
      const user = req.user;
      const result = await incomeService.listIncomes({ user });
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },

  async search(req, res, next) {
    try {
      const user = req.user;
      const result = await incomeService.searchIncome({
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
      const result = await incomeService.updateIncome({
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
      const result = await incomeService.deleteIncome({
        ...req.params,
        user,
      });
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },
};
