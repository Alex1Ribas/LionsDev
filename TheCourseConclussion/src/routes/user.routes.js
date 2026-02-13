import { Router } from 'express';
import { UserController } from "../controllers/user.controller.js";
import { ensureValidId } from "../middlewares/validate.middleware.js";
import { authMiddleware, requireRole } from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/users/register', UserController.create);
router.post('/users/login', UserController.login);
router.get('/users/', authMiddleware, requireRole("ADMIN"), UserController.list);
router.get('/users/:id', authMiddleware, ensureValidId, UserController.search);
router.put('/users/:id', authMiddleware, ensureValidId, requireRole("ADMIN"), UserController.update);
router.delete('/users/:id', authMiddleware, ensureValidId, requireRole("ADMIN"), UserController.remove);

export default router;
