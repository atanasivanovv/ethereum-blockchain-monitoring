import express from "express";
import configs from "./configs.js";
import transactions from "./transactions.js";

const router = express.Router();

router.use("/configs", configs);
router.use("/transactions", transactions);

export default router;
