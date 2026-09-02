import { Router } from "express";
import { newTask, getTasks, getOneTask} from "../controllers/task.controllers.js";

const taskRouter = Router();

taskRouter.post("/task", newTask); //añadir uma nueva tarea
taskRouter.get("/task", getTasks); //obtener todas las tareas
taskRouter.get("/task/:id", getOneTask); //obtener una tarea por su id
taskRouter.put("/task/:id"); //actualizar una tarea por su id
taskRouter.delete("/task/:id"); //eliminar una tarea por su id
