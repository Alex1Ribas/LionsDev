import { Router } from 'express';
import { UserController } from "../controllers/user.controller.js";
import { ensureValidId } from "../middlewares/validate.middleware.js";
import { authMiddleware, requireRole } from '../middlewares/authMiddleware.js';

const router = Router();

//posts
router.post('/register', UserController.create);
router.post('/login', UserController.Login);
//router.post('/receita', authMiddleware(), requireRole("ADMIN"), UserController.createReceita);
//router.post('/despesa', authMiddleware(), requireRole("ADMIN"), UserController.createDespesa);

//gets
router.get('/', authMiddleware(), requireRole("ADMIN"),UserController.list);//get all users
router.get('/:id', authMiddleware(), ensureValidId, UserController.search); //get user by id
//router.get('receitas', authMiddleware(), requireRole("ADMIN"), UserController.listReceitas);
//router.get('despesas', authMiddleware(), requireRole("ADMIN"), UserController.listDespesas);
//router.get('relatorio', authMiddleware(), requireRole("ADMIN"), UserController.relatorioFinanceiro);

//puts
router.put('/:id', authMiddleware(), ensureValidId, requireRole("ADMIN"), ensureValidId, UserController.update);
//router.put('/receita/:id', authMiddleware(), ensureValidId, requireRole("ADMIN"), UserController.updateReceita);
//router.put('/despesa/:id', authMiddleware(), ensureValidId, requireRole("ADMIN"), UserController.updateDespesa);

//deletes
router.delete('/:id', authMiddleware(), ensureValidId,requireRole("ADMIN"), UserController.remove);
//router.delete('/receita/:id', authMiddleware(), ensureValidId, requireRole("ADMIN"), UserController.removeReceita);
//router.delete('/despesa/:id', authMiddleware(), ensureValidId, requireRole("ADMIN"), UserController.removeDespesa);

export default router;
//sistema de login e registro de usuários.
//sistema de contas a pagar e receber.
