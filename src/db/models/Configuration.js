import { DataTypes } from "sequelize";
import sequelize from "../instance.js";

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
