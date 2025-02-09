import { Router } from "express";
import { cursosValidator } from "../middlewares/validator.js";
import { crearCurso } from "./cursos.controller.js";

const router = Router();

router.post("/crearCurso/:pid", cursosValidator, crearCurso )

export default router;