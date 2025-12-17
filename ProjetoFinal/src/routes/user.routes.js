import { Router } from 'express';
import { UserController } from "../controllers/user.controller.js";
import { ensureValidId } from "../middlewares/validate.middleware.js";
import { authMiddleware, requireRole } from '../middlewares/authMiddleware.js';

const router = Router();


router.post('/user/register', UserController.create);
router.post('/user/login', UserController.Login);
router.get('/user/', authMiddleware, requireRole("ADMIN"),UserController.list);
router.get('/user/:id', authMiddleware, ensureValidId, UserController.search);
router.put('/user/:id', authMiddleware, ensureValidId, requireRole("ADMIN"), ensureValidId, UserController.update);
router.delete('/user/:id', authMiddleware, ensureValidId,requireRole("ADMIN"), UserController.remove);

export default router;
