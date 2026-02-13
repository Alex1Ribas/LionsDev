import { Router } from 'express';
import { ensureValidId } from "../middlewares/validate.middleware.js";
import { authMiddleware, requireRole } from '../middlewares/authMiddleware.js';
import { expenseController } from '../controllers/expense.controller.js';

const router = Router();

router.post('/expenses', authMiddleware, requireRole("ADMIN"), expenseController.create);
router.get('/expenses', authMiddleware, requireRole("ADMIN"), expenseController.list);
router.get('/expenses/:id', authMiddleware, ensureValidId, expenseController.search);
router.put('/expenses/:id', authMiddleware, ensureValidId, expenseController.update);
router.delete('/expenses/:id', authMiddleware, ensureValidId, requireRole("ADMIN"), expenseController.remove);

export default router;
