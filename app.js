import express from "express";
import { starDB } from "./src/config/database";
import { taskRouter } from "./src/routers/task.routers";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api", taskRouter);

app.listen(PORT, async () => {
  await starDB();
  console.log(`Servidor listo http://localhost:${PORT}`);
});
