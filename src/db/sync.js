import sequelize from "./instance.js";

export const sync = () => {
  return sequelize
    .sync({ force: false, alter: true, logging: false })
    .then(() => {
      console.log("Database synchronized successfully");
    })
    .catch((error) => {
      console.error("Error synchronizing database:", error);
    });
};
