import { Router } from 'express';
import { UserController } from "../controllers/user.controller.js";
import { ensureValidId } from "../middlewares/validateMiddleware.js";
import { authMiddleware, requireRole } from '../middlewares/authMiddleware.js';

const router = Router();

// Public routes
router.post('/', UserController.create);
router.post('/login', UserController.Login);

// Protected routes
router.get('/', authMiddleware(), requireRole("ADMIN"), UserController.list);
router.get('/:id', authMiddleware(), ensureValidId, UserController.search);
router.put('/:id', authMiddleware(), ensureValidId, requireRole("ADMIN"), UserController.update);
router.delete('/:id', authMiddleware(), ensureValidId, requireRole("ADMIN"), UserController.remove);

export default router;