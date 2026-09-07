import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("task_users_db", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

export const starDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log("Conexion exitosa a la DB");
  } catch (error) {
    console.error("Error al conectar con la BD");
  }
};
