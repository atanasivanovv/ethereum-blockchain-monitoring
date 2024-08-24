import { Sequelize } from "sequelize";
import config from "../config/index.js";

const sequelize = new Sequelize({
  dialect: 'mysql',
  database: config.database,
  user: config.user,
  password: config.password,
  host: config.hostname,
  port: config.port,
});

export default sequelize;
