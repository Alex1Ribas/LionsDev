import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { reportController } from '../controllers/report.controller.js';

const router = Router();

router.post('/reports/', authMiddleware, reportController.create);

export default router;
