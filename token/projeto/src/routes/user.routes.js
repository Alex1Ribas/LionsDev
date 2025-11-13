import { Router } from 'express';
import { UserController } from "../controllers/user.controller.js";
import { ensureValidId } from "../middlewares/validate.middleware.js";
import { authMiddleware, requireRole } from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/', UserController.create);
router.post('/login', UserController.Login);
router.get('/', authMiddleware(), requireRole("ADMIN"),UserController.list);
router.get('/:id', authMiddleware(), ensureValidId, UserController.search);
router.put('/:id', authMiddleware(), ensureValidId, requireRole("ADMIN"), ensureValidId, UserController.update);
router.delete('/:id', authMiddleware(), ensureValidId,requireRole("ADMIN"), UserController.remove);

export default router;
