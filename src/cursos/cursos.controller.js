import Cursos from "../cursos/cursos.model.js";
import Profesor from "../profesores/profesores.model.js";

export const crearCurso = async (req, res) => {
    try {
        const { pid } = req.params;
        const { nombre } = req.body;

        const profesor = await Profesor.findById(pid);
        if (!profesor || profesor.rol !== "TEACHER_ROLE" ){
            return res.status(403).json({ msg: "No autorizado." });
        }

        const curso = new Cursos({ nombre, profesor: pid });
        await curso.save();

        res.status(201).json({ msg: "Curso creado exitosamente", curso });
    } catch (error) {
        console.error("Error en crearCurso:", error);
        res.status(500).json({ error: "Error al crear el curso" });
    }
}