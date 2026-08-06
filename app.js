import express from "express";
import { starDB } from "./src/config/database";
import { algo } from "./src/models/user.model";
import { algoRouter } from "./src/routers/user.router";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", movieRouter);

app.listen(PORT, async () => {
  await starDB();
  (console, console.log(`Servidor listo http:/localhost:${PORT}`));
});
