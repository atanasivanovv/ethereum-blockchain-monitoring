import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

const Config = sequelize.define("Config", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

export default Config;
