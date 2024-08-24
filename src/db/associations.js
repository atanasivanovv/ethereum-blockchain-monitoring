import { Transaction, Configuration } from "./models/index.js";

Transaction.belongsTo(Configuration, { foreignKey: "configId" });

export default function setupAssociations() {}
