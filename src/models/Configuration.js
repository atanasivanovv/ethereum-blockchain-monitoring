import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Configuration = sequelize.define("Configuration", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

export default Configuration;
