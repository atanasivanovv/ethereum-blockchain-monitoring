import express from "express";
import config from "./config.js";
import transaction from "./transaction.js";

const router = express.Router();

router.get("/config", config);
router.get("/transaction", transaction);

export default router;
