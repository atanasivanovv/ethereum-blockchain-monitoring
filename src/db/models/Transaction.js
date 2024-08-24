import { DataTypes } from "sequelize";
import sequelize from "../instance.js";
import Configuration from "./configuration.js";

const Transaction = sequelize.define("transaction", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  txHash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  configId: {
    type: DataTypes.INTEGER,
    references: {
      model: Configuration,
      key: "id",
    },
    allowNull: false,
  },
  data: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

export default Transaction;
