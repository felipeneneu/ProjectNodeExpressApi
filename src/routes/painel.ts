import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Home admin");
});

router.get("/noticias", (req: Request, res: Response) => {
  res.send("Formulario de Contato");
});

export default router;
