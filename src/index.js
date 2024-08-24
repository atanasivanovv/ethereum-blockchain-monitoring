import express from "express";
import dotenv from "dotenv";
import process from "process";
import api from "./routes/index.js";
import { connectSequelize } from "./db/connect.js";

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

connectSequelize().then(() => {
  app.use(express.json());
  app.use("/api", api);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
