import { Router } from 'express';
import { ensureValidId } from "../middlewares/validate.middleware.js";
import { authMiddleware, requireRole } from '../middlewares/authMiddleware.js';
import { incomeController } from '../controllers/income.controller.js';

const router = Router();

router.post('/incomes', authMiddleware, requireRole("ADMIN"), incomeController.create);
router.get('/incomes', authMiddleware, requireRole("ADMIN"), incomeController.list);
router.get('/incomes/:id', authMiddleware, ensureValidId, incomeController.search);
router.put('/incomes/:id', authMiddleware, ensureValidId, incomeController.update);
router.delete('/incomes/:id', authMiddleware, ensureValidId, requireRole("ADMIN"), incomeController.remove);

export default router;
