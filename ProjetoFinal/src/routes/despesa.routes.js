import { Router } from 'express';
import { ensureValidId } from "../middlewares/validate.middleware.js";
import { authMiddleware, requireRole } from '../middlewares/authMiddleware.js';
import { despesaController } from '../controllers/despesa.controller.js';

const router = Router();

router.post('/despesa', authMiddleware, requireRole("ADMIN"), despesaController.create);
router.get('/despesa', authMiddleware, requireRole("ADMIN"),despesaController.list);
router.get('/despesa/:id', authMiddleware, ensureValidId, despesaController.search);
router.put('/despesa/:id', authMiddleware, ensureValidId, ensureValidId, despesaController.update);
router.delete('/despesa/:id', authMiddleware, ensureValidId,requireRole("ADMIN"), despesaController.remove);

export default router;
