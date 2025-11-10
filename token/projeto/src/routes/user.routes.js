import { Router } from 'express'
import { UserController } from "../controllers/user.controller";
import { ensureValidId } from "../middlewares/validate.middleware";

const router = Router();

router.post('/', UserController.create);
router.get('/', UserController.list);
router.get('/:id', ensureValidId, UserController.search);
router.put('/:id', ensureValidId, UserController.update);
router.delete('/:id', ensureValidId, UserController.remove);

export default router;