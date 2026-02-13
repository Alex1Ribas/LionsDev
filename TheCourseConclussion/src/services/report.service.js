import {
  parse,
  isValid,
  isAfter,
  isWithinInterval,
  startOfDay,
  endOfDay,
} from "date-fns";
import incomeRepository from "../repositories/income.repository.js";
import expenseRepository from "../repositories/expense.repository.js";
import createError from "../utils/createError.js";

export default {
  async create(data) {
    const { user, type, startDate, endDate } = data;

    if (!type || !startDate || !endDate) {
      throw createError("Type and periods are required", 400);
    }

    const start = startOfDay(
      parse(startDate, "dd/MM/yyyy", new Date())
    );
    const end = endOfDay(parse(endDate, "dd/MM/yyyy", new Date()));

    if (!isValid(start) || !isValid(end)) {
      throw createError("Invalid date format. Use dd/mm/yyyy", 400);
    }

    if (isAfter(start, end)) {
      throw createError(
        "Start date cannot be after end date",
        400
      );
    }

    const reportType = type.toLowerCase();
    const finalResult = {};

    if (reportType === "income" || reportType === "profit") {
      const dbIncomes = await incomeRepository.findByUser(user);
      const incomeSum = dbIncomes.reduce((acc, record) => {
        if (!record.entryDate || typeof record.entryDate !== 'string') return acc;
        const recordDate = parse(
          record.entryDate,
          "dd/MM/yyyy",
          new Date()
        );
        return isWithinInterval(recordDate, {
          start: start,
          end: end,
        })
          ? acc + (record.value || 0)
          : acc;
      }, 0);

      finalResult.totalIncome = incomeSum;
    }

    if (reportType === "expense" || reportType === "profit") {
      const dbExpenses = await expenseRepository.findByUser(user);
      const expenseSum = dbExpenses.reduce((acc, record) => {
        if (!record.exitDate || typeof record.exitDate !== "string")
          return acc;
        const recordDate = parse(
          record.exitDate,
          "dd/MM/yyyy",
          new Date()
        );
        return isWithinInterval(recordDate, {
          start: start,
          end: end,
        })
          ? acc + (record.value || 0)
          : acc;
      }, 0);

      finalResult.totalExpense = expenseSum;
    }

    if (reportType === "profit") {
      finalResult.netProfit =
        (finalResult.totalIncome || 0) - (finalResult.totalExpense || 0);
    }

    return finalResult;
  },
};
