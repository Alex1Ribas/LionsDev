import { Router } from 'express';
import { ensureValidId } from "../middlewares/validate.middleware.js";
import { authMiddleware, requireRole } from '../middlewares/authMiddleware.js';
import { receitaController } from '../controllers/receita.controller.js';

const router = Router();

router.post('/receita', authMiddleware, requireRole("ADMIN"), receitaController.create);
router.get('/receita', authMiddleware, requireRole("ADMIN"),receitaController.list);
router.get('/receita/:id', authMiddleware, ensureValidId, receitaController.search);
router.put('/receita/:id', authMiddleware, ensureValidId, ensureValidId, receitaController.update);
router.delete('/receita/:id', authMiddleware, ensureValidId,requireRole("ADMIN"), receitaController.remove);

export default router;
