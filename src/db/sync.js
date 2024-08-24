import { sequelize } from "./sequelize-instance";

export const sync = () => {
  return sequelize
    .sync({ force: false, alter: true })
    .then(() => {
      console.log("Database synchronized successfully");
    })
    .catch((error) => {
      console.error("Error synchronizing database:", error);
    });
};
