import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { relatorioController } from '../controllers/relatorio.controller.js';
const router = Router();

router.post('/relatorio/', authMiddleware, relatorioController.create);

export default router;
