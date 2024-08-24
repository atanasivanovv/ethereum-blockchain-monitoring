import sequelize from "./instance.js";
import "./associations.js";
import * as models from "./models/index.js";
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
