import { Sequelize } from "Sequelize";

export const sequelize = new Sequelize("algo", "root", "", {
  host: "localhost",
  // dialect: mysql
});

export const starDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log("conexion conexion a la base de datos");
  } catch (error) {
    console.log(Error);
  }
};
