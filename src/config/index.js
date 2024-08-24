import process from "process";
import dotenv from "dotenv";

dotenv.config();

const config = {
  development: {
    hostname: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
  },
  production: {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    hostname: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    infuraApiKey: process.env.INFURA_API_KEY,
  },
};

export default config[process.env.NODE_ENV || "development"];
