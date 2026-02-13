import incomeRepository from "../repositories/income.repository.js";
import { parse, isValid } from "date-fns";
import createError from "../utils/createError.js";

function ensureValidPayload({
  user,
  entryDate,
  value,
  method,
  payer,
  description,
}) {
  if (!user) throw createError("User not identified!", 401);
  if (!entryDate) throw createError("Entry date is required.", 400);
  if (!value) throw createError("Value is required.", 400);
  if (!method) throw createError("Method is required.", 400);
  if (!payer) throw createError("Payer is required.", 400);
  if (!description) throw createError("Description is required.", 400);
}

export default {
  async createIncome(data, user) {
    ensureValidPayload(data);

    try {
      if (!isValid(parse(data.entryDate, "dd/MM/yyyy", new Date()))) {
        throw createError(
          "Entry date must be in dd/mm/yyyy format.",
          400
        );
      }
      if (data.value <= 0) {
        throw createError("Income value must be greater than zero.", 400);
      }
      if (!parseFloat(data.value)) {
        throw createError("Value must be a number!", 400);
      }
      if (data.description.length < 10) {
        throw createError("Description must have at least 10 characters.", 400);
      }

      const newIncome = incomeRepository.create(data, user);
      return newIncome;
    } catch (err) {
      throw createError("Failed to create income");
    }
  },

  async listIncomes(user) {
    const incomes = await incomeRepository.findAll(user);
    if (incomes.length === 0) {
      throw createError("No incomes found.", 404);
    }
    return incomes;
  },

  async searchIncome(id) {
    const incomes = await incomeRepository.findById(id.id);
    if (incomes.length === 0) {
      throw createError(
        "No incomes found for the provided payer.",
        404
      );
    }
    return incomes;
  },

  async updateIncome(id, data) {
    if (id === undefined || id === null) {
      throw createError("Income ID is required for update.", 400);
    }

    const updatedIncome = await incomeRepository.updateById(id.id, data);
    if (!updatedIncome) {
      throw createError("Income not found.", 404);
    }
    return updatedIncome;
  },

  async deleteIncome(id) {
    if (id === undefined || id === null) {
      throw createError("Income ID is required for deletion.", 400);
    }

    const deletedIncome = await incomeRepository.deleteById(id.id);
    if (!deletedIncome) {
      throw createError("Income not found.", 404);
    }

    return deletedIncome;
  },
};
