import process from "process";
import dotenv from "dotenv";

dotenv.config();

const config = {
  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST || "mysql",
    port: process.env.DB_PORT || 3306,
    infuraApiKey: process.env.INFURA_API_KEY,
    dialect: "mysql",
  },
};

export default config[process.env.NODE_ENV || "production"];
