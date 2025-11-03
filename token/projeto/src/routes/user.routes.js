import { Router } from 'express'
import { UserController } from "../controllers/user.controller";
import { ensureValidId } from "../middlewares/validate.middleware";

const router = Router();

router.post('/users', UserController.create);
router.get('/users', UserController.list);
router.get('/users/:id', ensureValidId, UserController.search);
router.put('/user/:id', ensureValidId, UserController.update);
router.delete('/users/:id', ensureValidId, UserController.remove);

export default router;