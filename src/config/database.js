import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
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