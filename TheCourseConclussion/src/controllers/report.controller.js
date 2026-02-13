import reportService from "../services/report.service.js";

export const reportController = {
  async create(req, res, next) {
   try {
      const { type, startDate, endDate } = req.body;
      const user = req.user

      const result = await reportService.create({
        user, type, startDate, endDate
      });
      return res.status(201).json(result);
    } catch (err) {
      return next(err);
    }
  },
};
