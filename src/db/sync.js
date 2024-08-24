import sequelize from "./instance.js";

export const sync = () => {
  return sequelize
    .sync({ force: true, alter: true })
    .then(() => {
      console.log("Database synchronized successfully");
    })
    .catch((error) => {
      console.error("Error synchronizing database:", error);
    });
};
