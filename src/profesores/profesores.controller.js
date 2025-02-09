import { hash } from "argon2";
import Profesores from "./profesores.model.js";

export const getProfesorById = async (req, res) =>{
    try{
        const {pid} = req.params;
        const profes = await Profesores.findById(pid)

        if(!profes){
            return res.status(404).json({
                success: false,
                message: "Profesor no encontrado"
            })
        }

        res.status(200).json({
            success: true,
            profes
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al obtener el profesor",
            error: err.message
        })
    }
}