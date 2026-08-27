import express from "express";
import { strarDB } from "./src/config/database";
import { userRouter } from "./src/routers/user.routes";
import { TaskModel } from "./src/models/task.model";
import { UserRoleModel } from "./src/models/user_role.model";
import { taskRouter } from "./src/routers/task.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api", userRouter);
app.use("/api", taskRouter);

app.listen(PORT, async () => {
  await strarDB();
  (console, log(`Servidor corriendo en el puerto ${PORT}`));
});
