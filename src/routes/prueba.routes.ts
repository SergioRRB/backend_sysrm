import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send({ message: "Se esta ejecutando la ruta de PRUEBA" });
});

router.get("/", (req: Request, res: Response) => {
  res.send({ message: "Se esta ejecutando la ruta de PRUEBA 2" });
});

router.post("/", (req: Request, res: Response) => {
  res.send({ message: "Se esta ejecutando la ruta de PRUEBA con post" });
});

export { router }