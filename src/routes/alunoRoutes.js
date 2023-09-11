import { Router } from "express";
import alunoController from "../controllers/AlunoController";

import loginRequired from "../middlewares/loginRequired"

const router = new Router();

router.get('/', alunoController.index);

export default router;
