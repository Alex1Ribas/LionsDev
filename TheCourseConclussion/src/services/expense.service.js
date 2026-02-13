import expenseRepository from "../repositories/expense.repository.js";
import { parse, isValid } from "date-fns";
import createError from "../utils/createError.js";

function ensureValidPayload({
  user,
  exitDate,
  value,
  method,
  recipient,
  description,
}) {
  if (!user) throw createError("User not identified!", 401);
  if (!exitDate) throw createError("Exit date is required.", 400);
  if (!value) throw createError("Value is required.", 400);
  if (!method) throw createError("Method is required.", 400);
  if (!recipient) throw createError("Recipient is required.", 400);
  if (!description) throw createError("Description is required.", 400);
}

export default {
  async createExpense(data, user) {
    ensureValidPayload(data);

    try {
      if (!isValid(parse(data.exitDate, "dd/MM/yyyy", new Date()))) {
        throw createError("Exit date must be in dd/mm/yyyy format.", 400);
      }
      if (data.value <= 0) {
        throw createError("Expense value must be greater than zero.", 400);
      }
      if (!parseFloat(data.value)) {
        throw createError("Value must be a number!", 400);
      }
      if (data.description.length < 10) {
        throw createError("Description must have at least 10 characters.", 400);
      }

      const newExpense = expenseRepository.create(data, user);
      return newExpense;
    } catch(err){
      throw createError("Failed to create expense")
    }
  },

  async listExpenses(user) {
    const expenses = await expenseRepository.findAll(user);
    if (expenses.length === 0) {
      throw createError("No expenses found.", 404);
    }
    return expenses;
  },

  async searchExpense(id) {
    const expenses = await expenseRepository.findById(id.id);
    if (expenses.length === 0) {
      throw createError(
        "No expenses found for the provided recipient.",
        404
      );
    }
    return expenses;
  },

  async updateExpense(id, data) {
    if (id === undefined || id === null) {
      throw createError("Expense ID is required for update.", 400);
    }

    const updatedExpense = await expenseRepository.updateById(id.id, data);
    if (!updatedExpense) {
      throw createError("Expense not found.", 404);
    }
    return updatedExpense;
  },

  async deleteExpense(id) {
    if (id === undefined || id === null) {
      throw createError("Expense ID is required for deletion.", 400);
    }

    const deletedExpense = await expenseRepository.deleteById(id.id);
    if (!deletedExpense) {
      throw createError("Expense not found.", 404);
    }

    return deletedExpense;
  },
};
