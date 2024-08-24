import sequelize from "./instance.js";
import models from "./models/index.js";
import { sync } from "./sync.js";

export const connectSequelize = () =>
  sequelize
    .authenticate()
    .then(() =>
      sync().then(() => ({
        sequelize,
        models,
      }))
    )
    .catch((error) => {
      console.error("Sequelize connection failed", error);
      return Promise.reject(error);
    });
