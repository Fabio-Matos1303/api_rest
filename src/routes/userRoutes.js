import { Router } from "express";
import userController from "../controllers/UserController";

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
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
