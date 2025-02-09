import { Router } from "express";
import { registerProfesor, login } from "./auth.controller.js";
import { registerValidatorProfesor, loginValidator } from "../middlewares/validator.js";
import { uploadProfilePictureProfesores, uploadProfilePictureAlumnos } from "../middlewares/multer-uploads.js";
import { deleteFileOnError } from "../middlewares/delete-file-on-error.js";

const router = Router();

router.post("/registerProfesor", uploadProfilePictureProfesores.single("profilePicture"),
registerValidatorProfesor, 
deleteFileOnError,
registerProfesor)

router.post("/login", loginValidator, login)

export default router