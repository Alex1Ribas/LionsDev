import { Router } from 'express';
import { ensureValidId } from "../middlewares/validate.middleware.js";
import { authMiddleware, requireRole } from '../middlewares/authMiddleware.js';
import { relatorioController } from '../controllers/relatorio.controller.js';
const router = Router();

router.post('/relatorio/', authMiddleware(), relatorioController.create);
router.get('/relatorio/', authMiddleware(),relatorioController.list);
router.get('/relatorio/:id', authMiddleware(), ensureValidId, relatorioController.search);
router.put('/relatorio/:id', authMiddleware(), ensureValidId, ensureValidId, relatorioController.update);
router.delete('/relatorio/:id', authMiddleware(), ensureValidId,requireRole("ADMIN"), relatorioController.remove);

export default router;
