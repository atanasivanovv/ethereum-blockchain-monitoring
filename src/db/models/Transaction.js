import { DataTypes } from "sequelize";
import sequelize from "../instance.js";

const Transaction = sequelize.define("Transaction", {
  txHash: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  configId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  data: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

export default Transaction;
