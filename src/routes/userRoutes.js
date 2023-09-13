import { Router } from "express";
import userController from "../controllers/UserController";

import loginRequired from "../middlewares/loginRequired"

const router = new Router();

// Não deveriam existir
router.get('/', userController.index);
router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/**
 * index -> Listar todos os usuários -> GET
 * store/create -> Criar um novo usuário -> POST
 * show -> Visualizar um usuário -> GET
 * update -> Atualizar um usuário -> PATCH ou PUT
 * delete -> Deletar um usuário -> DELETE
 */
