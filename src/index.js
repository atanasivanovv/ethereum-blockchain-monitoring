import express from "express";
import dotenv from "dotenv";
import api from "./routes/index.js";
import sequelize from "./config/sequelize.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", api);

sequelize
  .sync({ force: false })
  .then(() => console.log("Database & tables created"))
  .catch((err) => console.error("Error creating database & tables:", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
