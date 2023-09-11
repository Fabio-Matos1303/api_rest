import { Router } from "express";
import alunoController from "../controllers/AlunoController";

import loginRequired from "../middlewares/loginRequired"

const router = new Router();

router.get('/', alunoController.index);
router.put('/:id', alunoController.update);
router.get('/:id', alunoController.show);
router.delete('/:id', alunoController.delete);
router.post('/', alunoController.store);

export default router;
