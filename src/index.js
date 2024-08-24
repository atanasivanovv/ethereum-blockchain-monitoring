import express from "express";
import dotenv from "dotenv";
import process from "process";
import api from "./routes/index.js";
import { connectSequelize } from "./db/connect.js";
import { startMonitoring } from "./monitoring.js";

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

Promise.all([connectSequelize(), startMonitoring()])
  .then(() => {
    app.use(express.json());
    app.use("/api", api);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
  });
