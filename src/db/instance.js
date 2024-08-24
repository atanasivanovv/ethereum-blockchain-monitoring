import { Sequelize } from "@sequelize/core";
import { MySqlDialect } from "@sequelize/mysql";
import config from "../config/index.js";

const sequelize = new Sequelize({
  dialect: MySqlDialect,
  database: config.database,
  user: config.user,
  password: config.password,
  host: config.hostname,
  port: config.port,
});

export default sequelize;
