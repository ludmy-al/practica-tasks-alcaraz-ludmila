import { Router } from "express";
import { newTask } from "../controllers/task.controllers";

const taskRouter = Router();

taskRouter.post("/task", newTask); //añadir uma nueva tarea
taskRouter.get("/task"); //obtener todas las tareas
taskRouter.get("/task/:id"); //obtener una tarea por su id
taskRouter.put("/task/:id"); //actualizar una tarea por su id
taskRouter.delete("/task/:id"); //eliminar una tarea por su id

export { taskRouter };
