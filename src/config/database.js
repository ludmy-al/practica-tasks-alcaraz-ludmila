import { Sequelize } from "Sequelize";

export const sequelize = new Sequelize("tasks_users_db", "root", "", {
  host: "localhost"
  dialect: "mysql",
});

export const starDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log("conexión con la DB exitosa");
  } catch (error) {
    console.log("No se pudo conectar a la DB:", error);
  }
};
