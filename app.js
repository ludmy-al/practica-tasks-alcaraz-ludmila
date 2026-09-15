import "dotenv/config";
import express from "express";
import { strarDB } from "./src/config/database.js";
import { userRouter } from "./src/routers/user.routes.js";
import { taskRouter } from "./src/routers/task.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", userRouter);
app.use("/api", taskRouter);

app.listen(PORT, async () => {
  await strarDB();
  (console, log(`Servidor corriendo en el puerto ${PORT}`));
});
