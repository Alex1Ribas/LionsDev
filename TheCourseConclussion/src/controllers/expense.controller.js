import expenseService from "../services/expense.service.js";

export const expenseController = {
  async create(req, res, next) {
    try {
      const user = req.user;
      const result = await expenseService.createExpense({ ...req.body, user });
      return res.status(201).json(result);
    } catch (err) {
      return next(err);
    }
  },

  async list(req, res, next) {
    try {
      const user = req.user;
      const result = await expenseService.listExpenses({ user });
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },

  async search(req, res, next) {
    try {
      const user = req.user;
      const result = await expenseService.searchExpense({
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
      const result = await expenseService.updateExpense({
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
      const result = await expenseService.deleteExpense({
        ...req.params,
        user,
      });
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },
};
