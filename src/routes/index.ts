import { Router } from "express";
import { home } from "../controllers/homeController";
import * as infoController from "../controllers/infoController";
import * as userController from "../controllers/userController";

const router = Router();

router.get("/", home);

router.get("/contato", infoController.contato);
router.get("/sobre", infoController.sobre);

router.get("/name", userController.name);
router.get("/idade", userController.age);
router.post("/idade_resultado", userController.ageResult);

export default router;
