import { Sequelize } from "Sequelize";

export const sequelize = new Sequelize("task_users_db", "root", "", {
  host: "localhost",
  // dialect: mysql
});

export const starDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log("Conexion exitosa a la DB");
  } catch (error) {
    console.Error("Error al conectar con la BD");
  }
};
